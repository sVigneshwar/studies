import React from 'react'
import type Greet from '../Greet'

export default function CustomComponent(prop: React.ComponentProps<typeof Greet>) {
  return (
    <div>
      {prop.isLoggedIn}
      {prop.message}
      {prop.name}
    </div>
  )
}
