import { useEffect, useRef, useState } from "react"

export default function Day5() {
    const [count, SetCount] = useState(0)
    const prevState = useRef<number | null>(count)

    useEffect(() => {
        prevState.current = count
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <p>Previous Count: {prevState.current}</p>
            <button onClick={() => SetCount(count + 1)}>Increment</button>
        </div>
    )
    
}
