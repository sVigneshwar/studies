// day 2: function, narrowing & literals
//-------------------------------------------------------

import { assert } from "node:console";

// 1) function parametrs and return types
function sum1(a:number, b:number):number{
    return a + b;
}
// always use type paraments, let ts infer return type unless it is complex

// arrow function
const multiply = (a:number, b:number):number => a * b;

//-------------------------------------------------------
// 2) optional parameters and default values

// optinal parameters
function greet(name?:string):string{
    if(!name){
        return `Hello user`
    }
    return `hello ${name}`
}
console.log(greet("vicky"));

// default values
function greet1(people:number = 10){
    return `hello ${people} members`
}

console.log(greet1());

// prefer default over optional parameters

//-------------------------------------------------------
// 3) typeof narrowing

function printValue(value:string|number){
    if(typeof value === "string"){
        return value.toLocaleUpperCase()
    }else{
        return value * 10;
    }
}

console.log(printValue("hellow"))
console.log(printValue(12))

// in operator (in operator is a js only, just checking how it works here)

type Admin = {
    person: "admin",
    permission: string[]
}

type User = {
    person: "employee"
}

function checkPermission(person:Admin | User){
    if("permission" in person){
        return person.permission
    }
}

console.log(checkPermission({person: "employee"}));
console.log(checkPermission({person: "admin", permission: ["all access"]}));

//-------------------------------------------------------

// 4) literal types

type buttonVariant = "primary" | "default"

function renderButton(buttonType: buttonVariant){
    return `<button>${buttonType}</button>`
}

console.log(renderButton("primary"));
// console.log(renderButton("blue")); // error

//-------------------------------------------------------

// 5) discriminated unions

type apiResponse = {status: "loading"} | {status: "success", data: string[]} | {status: "error", message: string}

function handleResponse(api: apiResponse){
    if(api.status === "success"){
        return api.data
    }
}

console.log(handleResponse({status: "success", data: ["test data"]}));

//-------------------------------------------------------
// 6) never (signals impossible cases)

// so "never" is basically additional checking on top of ts inference

function fail(message: string):never{
    throw new Error(message)
}

// console.log(fail("error message"));

//-------------------------------------------------------

// 7) avoid enums, use unions instead

// enum Status {Loading, Succes, Error}
// type Status = "loading" | "success" | "error"

//-------------------------------------------------------
// 📝 Day 2 Practice Task (IMPORTANT)

type Status = "loading" | "success" | "Error" | "idle"

function assertNever(value: never):never{
    throw new Error(value)
}

function fetchStatus(status: Status) {

    switch(status){
        case "loading":
            return "Loading..."
        case "success":
            return "Data loaded"
        case "Error":
            return "Error"
        // default:
        //     return assertNever(status) // this shows idle is not used error
    }
}

console.log(fetchStatus("loading"))
console.log(fetchStatus("success"))
console.log(fetchStatus("Error"))
// console.log(fetchStatus("test"))
