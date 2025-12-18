
type ButtonProps = {
    variant: string,
    disabled?:boolean
    label: string
}

export default function Button({variant, disabled, label}:ButtonProps) {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.className);
    
  }
  return (
    <button className={variant} disabled={disabled} onClick={(e) => handleClick(e)}>{label}</button>
  )
}
