// ---------------------------------------------------------------
//1) what is ts - JS + safety. js error happens at runtime, ts error happens in development
// ---------------------------------------------------------------
//2) basic types
let name:string = "Vicky"
let age:number = 29
const occupation:boolean = true
age = 10
// ---------------------------------------------------------------
//3)arrays and tuples
let skils:string[] = ["react", "js"] 
let scores:number[] = [10, 20]

// tuples are fixed values
let user:[string, number] = ["vicky", 30]

const useUser = ():[string, number] => {
    return ["vicky", 30]
}

const returnBoolean = ():boolean => {
    return true
}
// ---------------------------------------------------------------
// 4) any vs unknown: do not use any, always prefer unknown
// any
let value:any // avoid
value.toUpperCase();

// unknown
let value1:unknown // use unkown if you do not know the data type yet

if(typeof value1 === "string"){
    value1.toUpperCase();
}
// ---------------------------------------------------------------
// 5) union types

let status: 'loading'| 'success' | 'error'

status = "loading"
status = "done" // this will throw error in ts

// ---------------------------------------------------------------
// 6) optional properties

type User = {
    name: string
    age: number
    email?:string
}

let userData1:User = {
    name: "Vicky",
    age: 29
}

let userData2:User = {
    name: "Vicky",
    age: 29,
    email: 'test@test.com'
}

userData2.email?.toLowerCase()

// ---------------------------------------------------------------
// 7) type vd interface

// type - used in unions / advanced logic
type Json = {
    title: string
    version: number
}

const data:Json = {
    title: "heading",
    version: 3.1 // should be number
}

// interface - as the name suggest only update in property and object
interface ButtonProp {
    label: string
    disabled: boolean
}

function renderButton(prop:ButtonProp){
    return `<button disabled="${prop.disabled}">${prop.label}</button>`
}

renderButton({label: "buttonLabel", disabled: false})
// ---------------------------------------------------------------
// 8) inference

// this is a concept where ts automatically knows the data types wihtout calling the typsafety
let count = 0 // here ts knows count is 0


function sum(a:number,b:number){ // here ts infers that return is number
    return a + b
}
sum(1,2)

// do not add infer in below cases
const item = []
// =>
const item1:number[] = []


const user1 = null // this can be any
// =>
const user2:User | null = null 

// ---------------------------------------------------------------
// Day 1 Practice Task (DO THIS)

interface UserData {
    id:number,
    name:string
}
function getUser(id:number|null):UserData|null {
  if (id === null) return null
  return { id, name: "Vicky" }
}

