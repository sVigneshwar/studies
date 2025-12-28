
export type ProfilePropsType = {
    name: string
}

export default function Profile({name}:ProfilePropsType) {
  return (
    <div>
      This is {name} dashboard page
    </div>
  )
}
