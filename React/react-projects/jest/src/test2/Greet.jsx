import React from 'react'

export default function Greet({name = "Vicky"}) {
  return (
    <div>
      Hello {name}
    </div>
  )
}
