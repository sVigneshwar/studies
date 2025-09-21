//------------------------------------
// template literals

var string = "Testing purpose";

function normalJSReturn(){
	console.log("Hello i am "+string)
}

function ES6JSReturn(){
	console.log(`Hello i am ${string}`);
}

normalJSReturn()
ES6JSReturn()


//------------------------------------
//import and export (default export)

export function test(val){
	console.log(val*2);
}

export var number = 10; 

export default function test2(val){
	console.log(`Hello ${val}`);
}


//in another js
import test2, {test, number} from es6.js


//we can alos call default function inside the object like below
import {default as test2, test, number} from es6.js

test(number)
test2("testing")

//import works only if the file is hosted in a domain environment
//or we can use node js for import export

//------------------------------------
// optional chaining

// optional chaining is used with single ?, 
// If a value does not exisit error throws in console. but this will prevent error throwing, instead returns undefined.
// used to prevent error throwing

var arr = {
	name: "test",
	greet: () => console.log("testing function")
}

console.log(arr.greet()) // testing function
console.log(arr.age) // undefined
console.log(arr.age.something) // Uncaught TypeError: Cannot read properties of undefined (reading 'something')
console.log(arr.age?.something) // undefined
console.log(arr2) // arr2 is not defined // this needs to be handled manually or we can use globalThis
console.log(arr2?.age) // arr2 is not defined 
console.log(globalThis.arr2) // undefined
console.log(globalThis.arr2.age) // Cannot read properties of undefined (reading 'age')
console.log(globalThis.arr2?.age) // undefined


//------------------------------------
//nullish coalescing

// nullish coalescing is used with double ??, 
// sets a default value for a return. if a value exist, return that value or return defauly value (similar like if condition)
//if the provided/return value (based on input and output) is undefined or null, then the default value is set using nullish coalescing

var test = value => value ?? 18;

console.log(test(25)) // 25
console.log(test()) // 18
console.log(test(null)) // 18 
console.log(test(undefined)) // 18
console.log(test(true)) // true
console.log(test({name:"vicky"})) // {name: "vicky"}


//------------------------------------

// by going through the optional chaning and nullish coalescing, i got a new study

// 1)if i call any value or array or object, then the first call will be undefined  (but not suatable for variables, for variable it will show variable is not declared or not defined something like that error)
// Example) document.querySelector("#header") // even it is not there it will return undefined

// 2) but if i call any thing inside, it will throw uncaught error in console.
// Example) document.querySelector("#header").textContent // Uncaught TypeError: Cannot read properties of null (reading 'textContent')

//------------------------------------

// 1 c
// 2 a
// 3 b
// 4 c
// 5 b
// 6 
// 7 
// 8 
// 9 
// 10 