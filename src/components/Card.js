import React, { useState, useEffect } from "react";

function Card(props) {
  
  const [ wasClicked, setWasClicked ] = useState(false);

  useEffect(()=>{
    if(props.shouldReset){
      setWasClicked(false);
    }
    console.log(props.shouldReset)
  },[props.shouldReset]);

  const handleClick = () => {    
    if(wasClicked){
      alert("Corrupted memory...");
      props.reset();           

    }else{
      props.incrementScore();
      setWasClicked(true); 
      props.handleShuffle();
    }   
    
  };

  return (
    <div onClick={ handleClick } className="card">
      {props.content}     
    </div>
  );
}

export default Card;