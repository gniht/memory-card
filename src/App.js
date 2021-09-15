import React, { useState, useEffect } from "react";
import Card from "./components/Card.js";

function App() {
  const initialDeck = [
    "!", 
    "@", 
    "#",
    "$",
    "%",
    "^",
    "&", 
    "*"
  ];
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardDeck, setCardDeck] = useState(initialDeck);
  const [shouldReset, setShouldReset] = useState(false);  
  
  function reset(){
    setShouldReset(true);    
  }

  useEffect(() => {
    if(shouldReset){
      setCurrentScore(0);
      setShouldReset(false);
    }
  },[shouldReset]);
  
  function incrementScore(){
    setCurrentScore(currentScore+1);
    if(currentScore >= highScore){
      //works but seems wrong, probably an updating issue 
      setHighScore(currentScore+1);
    }
  }  

  function shuffle() {
    let temp = [...cardDeck];    
    let shuffledDeck = [];
    let index;

    while(temp.length > 0){
      index = Math.random()*temp.length;      
      shuffledDeck = [...shuffledDeck, ...temp.splice(index, 1)];
      console.log(temp)
      console.log(shuffledDeck);
    }
    setCardDeck(shuffledDeck);
  }  
  

  return (
    <div className="App">
      <div className="scoreBoard">
        <h3>Game Score: {currentScore}</h3>
        <h3>High Score: {highScore}</h3>        
      </div>
      <div className="tableAlignment">
        <div className="cardTable">
          {cardDeck.map(card =>(
            <Card content={card} key={card} 
            handleShuffle={shuffle} 
            incrementScore={incrementScore} 
            shouldReset={shouldReset} reset={reset}/>
          ))}
        </div>
      </div>
         
    </div>
  );
}

export default App;
