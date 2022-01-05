import React, { useState } from "react"
import './styles.css'

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(10)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
  }

  function calculateWordCount(text) {
    const words = text.trim().split(" ")
    const filteredWords = words.filter(word => word !== "") //to convert an empty array from [''] --> []
    console.log(filteredWords)
    return filteredWords.length
  }

  return (
    <div>
      <h1>How fast can you type?</h1>  
      <textarea 
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
