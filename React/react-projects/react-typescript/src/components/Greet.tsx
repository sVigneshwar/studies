
type GreetProps = {
  name: string
  message: number
  isLoggedIn: boolean
}

export default function Greet(props:GreetProps) {
  return (
    <div>
        {
            props.isLoggedIn
            ? <p>Hello {props.name}, You have {props.message} messages</p>
            : <h2>Welcome Guest</h2>
        }
    </div>
  )
}
