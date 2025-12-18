// day 3: object, utilit types and real patterns
//-------------------------------------------------------
// 1)object typing

interface User{
    name: string
    age: number
}

const user:User = {
    name: "vicky",
    age: 18
}

//-------------------------------------------------------
// 2) readonly
interface User1{
    readonly id: number // this can prevent overwriting
    name: string
}

const User1:User1 = {
    id: 1,
    name: "vicky"
    
}

//-------------------------------------------------------
// 3) index signatures

interface Errors{
    [key:string]:string
}

const error:Errors = {
    name: 'enter valid name',
    email: 'enter valid email'
}
//-------------------------------------------------------
// 4) record utility

// record utility is same as index signature 
type Errors1 = Record<string, string>

// Record<string, number> === [key:string]:number
//-------------------------------------------------------
// 5) utility types (must know set)
// partial, pick, omit

// partial (make all values optional)
type User2 = {
    name: string
    age: number
}

const user2:Partial<User2> = {
    name: "name"
}

// pick (allow only particular values)

type User2Name = Pick<User, "name">

const user3:User2Name = {
    name: "name"
}

// omit (omit any particular values)

type User2Age = Omit<User2, "age" | "name">

const user4:User2Age = {
    name: "name"
}

//-------------------------------------------------------
// 6) Record + Unions

// this code is minimal compared to below
type Status1 = 'idle' | 'loading' | 'success' | 'error'

const statusText1: Record<Status1, string> = {
  idle: "Idle",
  loading: "Loading...",
  success: "Done",
  error: "Failed"
}

// this below code has more boilerplate
type Status =  {
    idle:string
    loading:string
    success:string
    error:string
}

const statusText: Status = {
  idle: "Idle",
  loading: "Loading...",
  success: "Done",
  error: "Failed"
}
//-------------------------------------------------------
// 7) common ts mistakes

// do not overuse any. instead use unkown
// const data:any = fetchData()
// const data1:unknown = fetchData()



// do not overuse types. instead let ts inferance
const number: number = 0
const number1 = 0

//-------------------------------------------------------
// 8) Real React-Style Example
// type ButtonProps = {
//     variant: "Primary" | "Default"
//     disabled?:boolean
//     onClick: () => void
// }

// function Button({variant, disabled, onClick}){
//     `<button class="variant" disabled="disabled" onClick={onClick}>Button</button>`
// }
//-------------------------------------------------------
// 📝 Day 3 Final Practice Task (IMPORTANT)

type ErrorTypes = {
    email: string
    password: string
    name: string
}

const errorObject: Partial<ErrorTypes> = {
    name: "Name should be valid",
    email: "Enter proper email value"
}

function getError(fieldName:keyof ErrorTypes):string | undefined{
    return errorObject[fieldName]
}

console.log(getError("name"));