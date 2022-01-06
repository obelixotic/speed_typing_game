import React from "react"
import useWordGame from "./hooks/useWordGame"
import './styles.css'

function App() {
  
  const { 
    text, 
    isTimeRunning, 
    timeRemaining, 
    wordCount, 
    textBoxRef, 
    handleChange, 
    startGame, 
    endGame 
  } = useWordGame()
  
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
