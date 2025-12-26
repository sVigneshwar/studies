type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export default function Button(props:ButtonProps) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button> 
      {/* dont get confused by seeing this onclick handleCLick event vicky, it is simple, just look at app.tsx . 
      we are just passsing handleClick prop from parent, thats it*/}
    </div>
  )
}
