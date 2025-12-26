import type { PersonProps } from "./Person.type"

export default function Person(props: PersonProps) {
  return (
    <div>
      <p>{props.name.first} {props.name.last}</p>
    </div>
  )
}
