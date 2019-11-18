// Import React
import React from 'react';

// Import Spectacle Core tagslocalhost:3000/#/0
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Appear,
  Notes
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-fsharp';

/* eslint import/no-webpack-loader-syntax: off */

// Require CSS
require('normalize.css');

const images =   {
  parser: require('./assets/Parser.svg'),
  poker: require('./assets/pokersplash.png')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1500}
      >
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Using F# to parse poker hand history</Quote>
            <Cite>Paul Wild</Cite>
          </BlockQuote>
          <Notes>
            <h4>Introduce yourself!</h4>
            <ol>
              <li>Software Developer .net OO</li>
              <li>Forgive me: not FP programmer - just like it</li>
              <li>First talk</li>
              <li>Excuses out of the way</li>
            </ol>
        </Notes>
        </Slide>
         <Slide
          transition={['slide']}
          bgImage={images.poker}
          bgDarken={0.75}
        >
          <Heading size={1} textColor="tertiary">
            Online Poker
          </Heading>
          <BlockQuote>
            <Quote textSize="36px" textAlign="left" padding="0px 0px 0px 10px">More rake is better</Quote>
            <Cite textSize="18px">Daniel Negreanu</Cite>
          </BlockQuote>
          <Notes>
            <h4>What is Poker?</h4>
            <ol>
              <li>Card game</li>
              <li>2 cards dealt, betting, card in the middle of the table</li>
              <li>Idea is to make the best hand</li>
              <li>Hard - Don't know how much you are losing, what starting hands make most money,</li>
              <li>History of hand is stored locally on machine or emailed</li>
            </ol>
        </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="secondary" textAlign="left" textSize="20px">
            <b>
*********** # 3 **************<br />
PokerStars Hand #205003316244:  Hold'em No Limit ($0.02/$0.05 USD) - 2019/10/08 21:34:25 UTC [2019/10/08 17:34:25 ET]<br />
Table 'Boyce III' 6-max Seat #6 is the button<br />
Seat 1: COMANDOSUR77 ($7.65 in chips)<br />
Seat 2: Nodrik ($5 in chips)<br />
Seat 3: chips010 ($6.21 in chips)<br />
Seat 4: TelmernatorX ($5 in chips)<br />
Seat 5: xdontxpanicx ($7.91 in chips)<br />
Seat 6: hardcoremaO ($5.18 in chips)<br />
COMANDOSUR77: posts small blind $0.02<br />
Nodrik: posts big blind $0.05<br />
*** HOLE CARDS ***<br />
Dealt to xdontxpanicx [3d As]<br />
chips010: raises $0.12 to $0.17<br />
TelmernatorX: folds<br />
xdontxpanicx: calls $0.17<br />
hardcoremaO: folds<br />
COMANDOSUR77: folds<br />
Nodrik: folds<br />
*** FLOP *** [Qc Js Ah]<br />
chips010: bets $0.20<br />
xdontxpanicx: calls $0.20<br />
*** TURN *** [Qc Js Ah] [9s]<br />
chips010: bets $0.40<br />
xdontxpanicx: folds<br />
Uncalled bet ($0.40) returned to chips010<br />
chips010 collected $0.78 from pot<br />
chips010: doesn't show hand<br />
*** SUMMARY ***<br />
Total pot $0.81 | Rake $0.03<br />
Board [Qc Js Ah 9s]<br />
Seat 1: COMANDOSUR77 (small blind) folded before Flop<br />
Seat 2: Nodrik (big blind) folded before Flop<br />
Seat 3: chips010 collected ($0.78)<br />
Seat 4: TelmernatorX folded before Flop (didn't bet)<br />
Seat 5: xdontxpanicx folded on the Turn<br />
Seat 6: hardcoremaO (button) folded before Flop (didn't bet)<br />
</b>
          </Text>
          <Notes>
            <h4>Just Describe the text</h4>
          </Notes>  
        </Slide>  
        
        <Slide transition={['spin']} bgColor="tertiary">
          <Text textColor="secondary" textAlign="left" textSize="20px">
            <b>
PokerStars Hand #205003316244 Hold'em No Limit<br />
2019/10/08 21:34:25 UTC<br />
*** HOLE CARDS ***<br />
COMANDOSUR77: posts small blind $0.02<br />
Nodrik: posts big blind $0.05<br />
Dealt to xdontxpanicx [3d As]<br />
chips010: raises $0.12 to $0.17<br />
TelmernatorX: folds<br />
xdontxpanicx: calls $0.17<br />
hardcoremaO: folds<br />
COMANDOSUR77: folds<br />
Nodrik: folds<br />
*** FLOP *** [Qc Js Ah]<br />
chips010: bets $0.20<br />
xdontxpanicx: calls $0.20<br />
*** TURN *** [Qc Js Ah] [9s]<br />
chips010: bets $0.40<br />
xdontxpanicx: folds<br />
Uncalled bet ($0.40) returned to chips010<br />
chips010 collected $0.78 from pot<br />
chips010: doesn't show hand<br />
</b>
          </Text>
          <BlockQuote>
            <Quote textSize="36px" textAlign="left" padding="0px 0px 0px 10px">you can't be all loose goosey, eating a sandwich</Quote>
            <Cite textSize="18px" textColor="secondary">Daniel Negreanu</Cite>
          </BlockQuote>
          <Notes>
          <h4>Too complicated</h4>
            <ol>
              <li>Simplify meta data</li>
              <li>Going forward, define the domain start -> going</li>
            </ol>
            </Notes>
        </Slide>  

        <Slide transition={['fade']} bgColor="quaternary" textColor="primary">
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="15"
            source={ require('!!raw-loader!./assets/domain.example') }>
          </CodePane>
          <Notes>         
            <h4>The Domain</h4>
            <ol>
              <li>Just use basic F#</li>
              <li>Unions - or sum type, "this or this or this"</li>
              <li>Records collection of properties</li>
            </ol>
            </Notes>

        </Slide>
          <Slide transition={['spin']} bgColor="quaternary" textColor="primary">
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="15"
            source={ require('!!raw-loader!./assets/domain2.example') }>
          </CodePane>
          <Notes>         
            <h4>The Domain</h4>
            <ol>
              <li>Just use basic F#</li>
              <li>Unions - or sum type, "this or this or this"</li>
              <li>Records collection of properties</li>
            </ol>
            </Notes>

        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The Options
          </Heading>
          <List>
            <ListItem>Big ol' nested IF</ListItem>
            <ListItem>Yacc and lexx</ListItem>
            <ListItem>Parser Combinator</ListItem>
            <ListItem>...</ListItem>
          </List>
          <Notes>
          A compiler or interptreter for a programminning language is often decomposed into two parts:
Read the source program and discover its structure.
Process this structure, e.g. to generate the target program.
Lex and Yacc can generate program fragments that solve the first task.
The task of discovering the source structure again is decomposed into subtasks:

Split the source file into tokens (Lex).
Find the hierarchical structure of the program (Yacc).

          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            Parser Combinator
          </Heading>
          <Text textAlign="left">
          In computer programming, a parser combinator is a higher-order function that accepts several parsers as input and returns a new parser as its output. In this context, a parser is a function accepting strings as input and returning some structure as output, typically a parse tree or a set of indices representing locations in the string where parsing stopped successfully. Parser combinators enable a recursive descent parsing strategy that facilitates modular piecewise construction and testing. This parsing technique is called combinatory parsing. 
          </Text>
          <Notes>
          <ol>
              <li>Hit up Wikipedia</li>
          In computer programming, a parser combinator is a higher-order function that accepts several parsers as input and returns a new parser as its output. In this context, a parser is a function accepting strings as input and returning some structure as output, typically a parse tree or a set of indices representing locations in the string where parsing stopped successfully. Parser combinators enable a recursive descent parsing strategy that facilitates modular piecewise construction and testing. This parsing technique is called combinatory parsing. 

          <li>Thanks for coming</li>
            </ol>          
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={images.parser} width="200%">
          </Image>

          <Notes>
            <ol>
              <li>Make it simpler</li>
              <li>Lets look at a simple parser...</li>
            </ol>
            </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">


          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={"let hello = pstring \"Say Hello\" // string -> Parser<string, 'a>"}>
          </CodePane>
      
        <Appear>
            <div>
            <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/sayHello.example')}>
          </CodePane>
          </div>
          </Appear>

          <Appear>
            <div>
            <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ "Say Hello" }>
          </CodePane>
          </div>
          </Appear>

          <Notes>
            <ol>
              <li>string parser . comes from fparsec, ignore parser state</li>
              <li>HIT NEXT</li>
              <li>Run on some input</li>
              <li>HIT NEXT</li>
              <li>Output, parser state</li>
            </ol>
            </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/waveGoodbye.example')}>
          </CodePane>

          <Appear>
            <div>
            <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/error.example')}>
          </CodePane>
          </div>
          </Appear>

          <Appear>
            <div>
            <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="35"
            source={ "let sayGoodbye = pstring \"Wave Goodbye\" // string -> Parser<string, 'a>" }>
          </CodePane>
          </div>
          </Appear>
          <Notes>
          <ol>
              <li>Look when you run it on some text that it isn't expecting. match out the success error</li>
              <li>HIT NEXT</li>
              <li>Get an error output describing where it went wrong</li>
              <li>HIT NEXT</li>
              <li>We could define a parser to work in this situation</li>
            </ol>
            </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            "Say Hello Wave Goodbye"
          </Heading>
          <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/sayWave.example')}>
          </CodePane>
          <Notes>
          <ol>
              <li>What happens if we have the text say hello wave goodbye?</li>
              <li>Slowly winding our way to combinators</li>
            </ol>
            </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            .>>.
          </Heading>
          <Appear>
              <div>
              <br />
            <CodePane 
              lang="fsharp" 
              theme="external" 
              textSize="36"
              source={"let hiBye = hello .>>. goodbye \n // string -> Parser<(string * string), 'a>"} >
            </CodePane>
            </div>
          </Appear>
          <Notes>
          <ol>
              <li>Welcome to fparsecs exoteric syntax</li>
              <li>the 'and then' function</li>
              <li>HIT NEXT</li>
              <li>Describe the tuple output</li>
              <li>DONT HIT NEXT</li>
              <li>tuple of string strin is pretty useless, because what you have here</li>
            </ol>
            </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">

          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/tune.example')}>
          </CodePane>
          <Notes>
          <ol>
              <li>A david gray massive tune</li>
              <li>Lets return that instead!</li>
              <li>monadic ? </li>
              <li>first parser and combinator, everythings great</li>
 
            </ol>
            </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            You sit on a thrown of lies!
          </Heading>
          <br />
          <CodePane 
            lang="fsharp" 
            theme="external" 
            textSize="36"
            source={ require('!!raw-loader!./assets/lies.example')}>
          </CodePane>
          </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
        <Heading size={3} textColor="secondary" caps>
            Paresrs
          </Heading>
          <br/ >
        <CodePane 
          lang="fsharp" 
          theme="external" 
          textSize="36"
          source={ require('!!raw-loader!./assets/parsers.example')}>
        </CodePane>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
        <Heading size={3} textColor="secondary" caps>
            Combinators
          </Heading>
          <br/ >
        <CodePane 
          lang="fsharp" 
          theme="external" 
          textSize="36"
          source={ require('!!raw-loader!./assets/combinators.example')}>
        </CodePane>
        </Slide>

        <Slide transition={['spin']} bgColor="tertiary">
          <Text textColor="secondary" textAlign="left" textSize="26px">
            <b>
PokerStars Hand #205003316244 Hold'em No Limit<br />
2019/10/08 21:34:25 UTC<br />
*** HOLE CARDS ***<br />
COMANDOSUR77: posts small blind $0.02<br />
Nodrik: posts big blind $0.05<br />
Dealt to xdontxpanicx [3d As]<br />
chips010: raises $0.12 to $0.17<br />
TelmernatorX: folds<br />
xdontxpanicx: calls $0.17<br />
hardcoremaO: folds<br />
COMANDOSUR77: folds<br />
Nodrik: folds<br />
*** FLOP *** [Qc Js Ah]<br />
chips010: bets $0.20<br />
xdontxpanicx: calls $0.20<br />
*** TURN *** [Qc Js Ah] [9s]<br />
chips010: bets $0.40<br />
xdontxpanicx: folds<br />
Uncalled bet ($0.40) returned to chips010<br />
chips010 collected $0.78 from pot<br />
chips010: doesn't show hand<br />
</b>
          </Text>
        </Slide>  

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
        <Heading size={1}>
            Summary
          </Heading>
  <List>
    <ListItem>Parsers are small composable functions that transform (usually) string into data</ListItem>
    <ListItem>Whitespace and newlines are a pain and have to be careful when dealing with them</ListItem>
    <ListItem>Consuming the input is another point to be careful with, but can be powerful</ListItem>
  </List>
        </Slide>

  <Slide transition={['slide']} bgColor="secondary" textColor="primary">
  <Heading size={1}>
      Thanks!
    </Heading>
    <List>
    <ListItem>Slides and code: https://github.com/PaulWild/FParsecTalk</ListItem>
    <ListItem>Me on Twitter: @pw_x</ListItem>
    <ListItem>https://fsharpforfunandprofit.com/posts/understanding-parser-combinators/</ListItem>
    <ListItem>{"https://www.youtube.com/watch?v=RDalzi7mhdY&t=2211s"}</ListItem>
  </List>
   </Slide>
</Deck>
    );
  }
}
