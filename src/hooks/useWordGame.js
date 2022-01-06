import { useState, useEffect, useRef } from "react"

function useWordGame() {
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

    return { text, isTimeRunning, timeRemaining, wordCount, textBoxRef, handleChange, startGame }
}

export default useWordGame