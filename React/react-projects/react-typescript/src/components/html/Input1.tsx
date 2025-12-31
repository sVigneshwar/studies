import type React from "react"

type InputPropType = React.ComponentProps<'input'>

export default function Input(props: InputPropType) {
  return (
    <div>
      <input {...props} />
    </div>
  )
}
