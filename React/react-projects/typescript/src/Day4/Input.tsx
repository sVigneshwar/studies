import { useState } from "react"

type UserData = {
    email: string,
    name: string
}

export default function Input() {
    const [data, setData] = useState<UserData>({
        email: '',
        name: ''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const{name, value} = e.currentTarget
        e.preventDefault()
        setData(prevState => ({...prevState, [name as keyof UserData]: value}))
    }
  return (
    <div>
      <input type="email" name="email" placeholder="email" value={data.email} onChange={handleChange} /> <br />
      <input type="text" name="name" placeholder="name" value={data.name} onChange={handleChange} />
    </div>
  )
}
