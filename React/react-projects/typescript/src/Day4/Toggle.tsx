import { useState } from "react"

type ToggleProps = {
    label: string
    defaultOn?: boolean
}

export default function Toggle({label, defaultOn}:ToggleProps) {   
    const [toggle, setToggle] = useState<boolean>(defaultOn? true : false)
    // const [toggle, setToggle] = useState(defaultOn ?? false) // another version of above code
    const handleToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
        // (e:React.MouseEvent<HTMLButtonElement>) not needed for this case, but may be needed for other events
        setToggle(prev => !prev)
    }
  return (
    <div>
        <h1>{toggle ? "ON" : "OFF"}</h1>
      <button onClick={handleToggle}>{label}</button>
    </div>
  )
}
