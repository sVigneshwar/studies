type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>, value:string) => void
}

export default function Input({value, handleChange}: InputProps) {
  return (
    <div>
        <input type="text" value={value} onChange={(e) => handleChange(e, e.target.value)} /> {/* 2) here also we can give input value e.target.value. this will be most likely based on the working scenario */}
    </div>
  )
}
