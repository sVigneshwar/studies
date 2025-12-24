import Greet from './components/Greet'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import { nameList, personName } from './components/Variables'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Status from './components/Status'

export default function App() {
  return (
    <div>
      
      {/* <Person name={personName} /> */}
      {/* <PersonList nameList={nameList} /> */}
      <Heading>This is a heading</Heading>
      <Oscar>
        <Heading>Someone won oscar</Heading>
      </Oscar>
      <Greet name="Vicky" isLoggedIn={true} />
      <Status status="success" />
    </div>
  )
}
