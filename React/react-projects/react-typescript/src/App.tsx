import Button from './components/Button'
import Greet from './components/Greet'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import { nameList, personName } from './components/Variables'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Status from './components/Status'

export default function App() {

  const handleClick = (event:React.MouseEvent, id:number) => { // need to specify if used inside a seperate component, since this can be used elsewhere other than button component also.
    console.log("Button clicked", event, id)
  }

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
      <Button handleClick={(event, id) => { // need not to specify since we are passing props, the ts directly infers from button component props ButtonProps
        console.log("Button clicked", event, id)
      }} />
      <Button handleClick={handleClick} />

      <Input value='' handleChange={(event, value) => console.log("input change", event, value)} /> {/* 1) here we can directly give event.target.value also. check INPUT component for 2) */}
    </div>
  )
}
