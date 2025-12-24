type PersonListProps = {
    nameList: {
        first: string
        last: string
    }[]
}

export default function PersonList(props:PersonListProps) {
  return (
    <div>
      {props.nameList.map(names => <p>{names.first} {names.last}</p>)}
    </div>
  )
}
