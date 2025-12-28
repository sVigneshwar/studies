import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import { nameList, personName } from './components/Variables'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Status from './components/Status'
import LoggedIn from './components/state/LoggedIn'
import User from './components/state/User'
import Counter from './components/state/Counter'
import Box from './components/context/Box'
import UserContextProvider from './components/context/UserContext'
import Dom from './components/ref/Dom'
import Timer from './components/ref/Timer'
import Profile from './components/auth/Profile'
import Private from './components/auth/Private'
import List from './components/generics/List'

export default function App() {

  const handleClick = (event:React.MouseEvent, id:number) => { // need to specify if used inside a seperate component, since this can be used elsewhere other than button component also.
    console.log("Button clicked", event, id)
  }

  return (
    <div>
      <Person name={personName} />
      <hr />
      <PersonList nameList={nameList} />
      <hr />
      <Heading>This is a heading</Heading>
      <hr />
      <Oscar>
        <Heading>Someone won oscar</Heading>
      </Oscar>
      <hr />
      <Greet name="Vicky" isLoggedIn={true} />
      <hr />
      <Status status="success" />
      <hr />
      <Button handleClick={(event, id) => { // need not to specify since we are passing props, the ts directly infers from button component props ButtonProps
        console.log("Button clicked", event, id)
      }} />
      <Button handleClick={handleClick} />
      <hr />
      <Input value='' handleChange={(event, value) => console.log("input change", event, value)} /> {/* 1) here we can directly give event.target.value also. check INPUT component for 2) */}
      <hr />
      <Container style={{border: '1px solid red', display: 'block'}} />
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <Counter />
      <hr />
      <Box />
      <hr />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <Dom />
      <hr />
      <Timer />
      <hr />
      <Private isLoggedIn={false} component={Profile} />
      <hr />
      <List list={["one", "two", "three"]} onClick={(listItem) => console.log(listItem)} />
      <List list={[1, 2, 3]} onClick={(listItem) => console.log(listItem)} />
      <List list={[{id: 1, name: "name1"}, {id: 2, name: "name2"}, {id: 3, name: "name3"}]} onClick={(listItem) => console.log(listItem)} />
    </div>
  )
}
