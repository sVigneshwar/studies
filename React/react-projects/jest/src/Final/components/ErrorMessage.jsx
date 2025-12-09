import React from 'react'

export default function ErrorMessage({message, onRetry}){
  return (
    <div>
      <p style={{color:'red'}}>{message}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  )
}
