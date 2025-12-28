import { useEffect, useRef } from "react"

export default function Dom() {
    const inputref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!inputref.current) return
        inputref.current.value = "test"
        inputref.current.focus()
    }, [])

  return (
    <div>
        <input type="text" ref={inputref} />
    </div>
  )
}
