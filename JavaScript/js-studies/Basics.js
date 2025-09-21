//----------------------------------------------------------------------------

//variables
var x = 5; // can be redeclared, modifed
let y = 10; // can be redeclared, modifed
const z = 15;// can be redeclared, cannot modifed

//----------------------------------------------------------------------------

//scope(function, block, global)

var globalvar = "i am global";
function testScope(){
    var functionVar = "i am inside fn"

    if(true){
        let blockVar = "i am block";

        console.log(blockVar)
    }
    console.log(functionVar)
}
console.log(globalvar)
testScope()

//----------------------------------------------------------------------------

//Hoisting

console.log(a) // variable is hoisted but not its value
var a = 10;

test(); // function can be hoisted

function test(){
    var b = 20;
    console.log(b)
}

console.log(c) // let and const cannot be hoisted, throws error
let c = 30;

//----------------------------------------------------------------------------

//Data Types

// primitive data types
var text = "text";
var number = 10;
var boolean = true;
var symbol = Symbol("id")
var nothing = null; // null
var notdefined; // undefined
var bigInt = 123123123123123132;

// non primitive data types
let obj = {name: "vicky", age: "29"}
let array = [1,2,3,4,5]

//----------------------------------------------------------------------------

// type coersion (== vs ===)

console.log(5 == "5")
console.log(5 === "5")
console.log(null == undefined)
console.log(null === undefined)
console.log(1 == true)
console.log(1 === true)

//----------------------------------------------------------------------------

