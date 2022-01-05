import React, { useState, useEffect } from "react"
import './styles.css'

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(3)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
  }

  function calculateWordCount(text) {
    const words = text.trim().split(" ")
    const filteredWords = words.filter(word => word !== "") //to convert an empty array from [''] --> []
    return filteredWords.length
  }
  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(currentTime => currentTime - 1)
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text))
    }
  }, [isTimeRunning, timeRemaining])

  return (
    <div>
      <h1>How fast can you type?</h1>  
      <textarea 
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
