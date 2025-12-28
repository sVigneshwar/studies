import React, { useEffect, useRef, useState } from 'react'

export default function Timer() {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(timerRef.current) window.clearInterval(timerRef.current)
    }

    const clearTimer = () => {
        setTimer(0)
    }

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => stopTimer()
    }, [])
    
  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={clearTimer}>Clear Timer</button>
    </div>
  )
}
