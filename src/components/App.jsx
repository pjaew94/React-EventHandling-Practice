import React, {useState} from "react";

function App() {

const [setHeading, headingHandler] = useState('Hello')

const [isMousedOver, isMousedOut] = useState(false)

function onClick(){
  headingHandler('Submitted')
}

function hover(){
  isMousedOut(true)
}

function unhover(){
  isMousedOut(false)
}


  return (
    <div className="container">
      <h1>{setHeading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={onClick}
      style={{backgroundColor: isMousedOver ? 'black' : 'white'}}
      onMouseOver={hover}
      onMouseOut={unhover}>Submit</button>
    </div>
  );
}

export default App;
