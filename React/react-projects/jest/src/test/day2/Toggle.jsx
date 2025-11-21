import React, { useState } from 'react'

export default function Toggle() {
    const [visible, setVisible] = useState(true)
  return (
    <div>
      {visible && <p data-testid="text">testing content</p>}
      <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
    </div>
  )
}
