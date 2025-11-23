import React, {useEffect} from 'react'

export default function Waitmessage() {
    const [waiting, setWaiting] = React.useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setWaiting(false)
        }, 2000);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
  return (
    <div>
      {waiting && <p>Waiting...</p>}
      {!waiting && <p>Ready!</p>}
    </div>
  )
}
