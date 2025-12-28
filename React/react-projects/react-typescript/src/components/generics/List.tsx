type ListPropType<T> = {
    list: T[]
    onClick: (value:T) => void
}

export default function List<T extends {}>({list, onClick}: ListPropType<T>) {
  return (
    <ul>
      {list.map((item,index) => <li key={index} onClick={() => onClick(item)}>{JSON.stringify(item)}</li>)}
    </ul>
  )
}