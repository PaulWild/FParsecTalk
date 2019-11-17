namespace HandParserEndpoint

open System
open System
open System.IO
open Microsoft.AspNetCore.Mvc
open Microsoft.Azure.WebJobs
open Microsoft.Azure.WebJobs.Extensions.Http
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.Logging
open PokerStarsParser.Parser
open PokerStarsParser.Poker

module Parser =
    
    // For convenience, it's better to have a central place for the literal.
    let Name = "xdontxpanicx"     

    let getValue a =
       match a with
        | SmallBlind(x) | BigBlind(x) | Bet(x) | Call(x) | Raise(x) -> x.Amount.Amount * -1m
        | Uncalled(x) | Won(x) -> x.Amount.Amount 
        | Dealt(_) | Fold(_) | Unknown(_) | Show(_) | DoesNotShow(_) -> 0m
  
    let getUser (a: Actions) =
        match a with
        | SmallBlind(x) | BigBlind(x) | Bet(x) | Call(x) | Raise(x)| Uncalled(x) | Won(x) -> x.Player 
        | Dealt(x) | Show(x) -> x.Player
        | Fold(x) | DoesNotShow(x) -> x
        | Unknown(_) -> String.Empty
    
    let sumActionsForUser(a: Actions List) =
        List.filter (fun x -> getUser x = Name) a
        |> List.map getValue
        |> List.sum

    let streetActions(s: Street) =
        match s with
        | PreFlop(x) | Showdown(x) -> x
        | Flop(x) | Turn(x) | River(x) -> x.Actions

                
    let getHandTotal (hand: Hand) =
        let sum = List.map (fun x-> streetActions x) hand.Streets
                |> List.map (fun x -> sumActionsForUser x)
                |> List.sum               
        (hand.Date, sum)

    
    
    type PokerStats = {
        BiggestWin: decimal
        BiggestLoss: decimal
        Stats: (DateTime * Decimal) List
    }
        
    let parseHands(handList: Hand List) =
        let parsed = List.map (fun x-> getHandTotal x) handList
        
        let biggest = List.map (fun (_,y) -> y) parsed |> List.max
        let smallest = List.map (fun (_,y) -> y) parsed |> List.min
        
        let resultsByDay= List.groupBy (fun (x:DateTime,y) -> x.Date) parsed |> List.map (fun (key, values) ->(key, List.map (fun (x,y) -> y) values |> List.sum))
        
        { BiggestWin = biggest; BiggestLoss = smallest; Stats = resultsByDay }
        
    

        
    [<FunctionName("HandParserEndpoint")>]
    let run ([<HttpTrigger(AuthorizationLevel.Function, "post", Route = null)>]req: HttpRequest) (log: ILogger) =
        async {
            use stream = new StreamReader(req.Body)
            let! toParse = stream.ReadToEndAsync() |> Async.AwaitTask
            stream.Dispose()
            
            let result = parse toParse

            return match result with
                    | Hands(x) -> OkObjectResult(parseHands x) :> IActionResult
                    | Error(str) -> BadRequestObjectResult(str) :> IActionResult
                    
        } |> Async.StartAsTask