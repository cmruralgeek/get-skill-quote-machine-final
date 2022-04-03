import './App.scss';
import { useState } from 'react';
import COLORS_ARRAY from "./colorsArray"

function App() {
  const [quote, setQuote] = useState("Three lefts make a right.");
  const [author, setAuthor] = useState("Gallagher");
  /* const [randNum, setRandNum] = useState(0); */
  const [accentColor, setAccentColor] = useState("#f50422");

  const genRandNum = () => {
    let randInt = Math.floor(quotesArr.length * Math.random());
    /* setRandNum(randInt); */
    setQuote(quotesArr[randInt].quote);
    setAuthor(quotesArr[randInt].author);
    setAccentColor(COLORS_ARRAY[randInt]);
  }

  const quotesArr = [
    {
      quote: "I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.",
      author: "Mitch Hedberg"
    },
    {
      quote: "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
      author: "Jack Handey"
    },
    {
      quote: "I’m not superstitious, but I am a little stitious.",
      author: "Michael Scott (Steve Carrell), The Office"
    },
    {
      quote: "If I woke up tomorrow with my head sewn to the carpet, I wouldn’t be more surprised.",
      author: "Clark Griswold (Chevy Chase), National Lampoon’s Christmas Vacation"
    },
    {
      quote: "If I’m not back in five minutes, just wait longer.",
      author: "Ace Ventura (Jim Carrey), Ace Ventura: Pet Detective"
    },
    {
      quote: "Does it disturb anyone else that ‘The Los Angeles Angels’ baseball team translates directly to ‘The The Angels Angels’?",
      author: "Neil DeGrasse Tyson"
    }
  ]


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor, color: accentColor}}>
        <div id="quote-box" style={{color: accentColor}}>
        <p id="text"> "{quote}" </p>
        <p id="author"> ~{author} </p>
        <div class="buttons">
        <a id="tweet-quote" style={{backgroundColor: accentColor}} href={encodeURI('http://www.twitter.com/intent/tweet? text=${quote} ~${author}')}>Tweet Quote</a> 
        <button id="new-quote" style={{backgroundColor: accentColor}} onClick={() => genRandNum()}>Generate A Random Quote</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
