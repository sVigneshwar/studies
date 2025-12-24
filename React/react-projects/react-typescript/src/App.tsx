import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

const personName = {
  first: "Vulture",
  last: "Vicky"
}

const nameList = [
  {
    first: 'Name',
    last: 'One'
  },
  {
    first: 'Name',
    last: 'Two'
  },
  {
    first: 'Name',
    last: 'Three'
  }
]

export default function App() {
  return (
    <div>
      <Greet name="Vicky" message={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
    </div>
  )
}
