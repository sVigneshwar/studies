
type GreetProps = {
  name: string
  message?: number
  isLoggedIn: boolean
}

export default function Greet(props:GreetProps) {
  let messageCount = props.message ?? 0
  return (
    <div>
        {
          props.isLoggedIn
          ? <p>Hello {props.name}, You have {messageCount} messages</p>
          : <h2>Welcome Guest</h2>
        }
    </div>
  )
}
