import type React from "react"

type OscarProps = {
    children: React.ReactNode
}

export default function Oscar(props: OscarProps) {
  return (
    <>{props.children}</>
  )
}
