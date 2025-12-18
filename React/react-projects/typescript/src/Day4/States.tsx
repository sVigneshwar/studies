import { useState } from "react"

type Status = "idle" | "success" | "away"
type User = {user: any[]}

export default function States() {
    const [open, setOpen] = useState(true) // auto infere by TS
    const [status, setStatus] = useState<Status>("idle")
    const [user, setUser] = useState<User | null>(null)
  return (
    <div>
      
    </div>
  )
}
