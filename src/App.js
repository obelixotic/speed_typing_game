import React, { useState, useEffect, useRef } from "react"
import './styles.css'

function App() {
  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
  }

  function calculateWordCount(text) {
    const words = text.trim().split(" ")
    const filteredWords = words.filter(word => word !== "") //to convert an empty array from [''] --> []
    return filteredWords.length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    // setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(currentTime => currentTime - 1)
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [isTimeRunning, timeRemaining])

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        {wordCount > 0 ? "Play again" : "Start"}
      </button>
      {wordCount > 0 && !isTimeRunning ? <h1>Word count: {wordCount}</h1> : null}
    </div>
  );
}

export default App;
