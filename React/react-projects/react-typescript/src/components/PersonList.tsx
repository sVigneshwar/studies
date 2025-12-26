import type { Name } from "./Person.type"

type PersonListProps = {
    nameList: Name[]
}

export default function PersonList(props:PersonListProps) {
  return (
    <div>
      {props.nameList.map(names => <p key={names.last}>{names.first} {names.last}</p>)}
    </div>
  )
}
