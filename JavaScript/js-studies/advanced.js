//----------------------------------------------------------------------------
//closure

function outer(){
    var counter = 0;

    function inner(){
        counter++;
        return counter;
    }

    return inner();
}

console.log(outer()) // 1
console.log(outer())// 1
console.log(outer())// 1

// in the above function, the inner runs inside outer, so each time the function cloes and memory closes and starts as new
// but in below, we have not caleed innner as a function, we just returned the name.
// we have stored the oter function in count, and we execute inner below, so js now notices the outer function is needed below for reference and the memeory does not close
// so first time we execute outer(), the variables sets to 0, once excute change to 1, next time 2, next time 3

function outer(){
    var counter = 0;

    function inner(){
        counter++;
        return counter;
    }

    return inner;
}

var count = outer()

console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3

//----------------------------------------------------------------------------
//this keyword (and binding)

function test(){
    console.log(this);
}

test() // window

//

var obj = {
    name: "vicky",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

obj.greet(); //'Hello vicky'

// In arrow function 'this' keyword refers to parents this, in this case window

var obj = {
    name: "vicky",
    greet: ()=>{
        console.log(this.name)
    }
}

obj.greet(); // ''

//
function greet(value) {
  console.log(`Hello, ${this.name}`);
  console.log(value);
  console.log('-----------------');
}

const person = { name: "Maverick" };

// call takes a function in the first and calls the object that need to be combined and the rest is the argument passed ...args
greet.call(person, "test") // Hello, Maverick // test

// apply takes a function in the first and calls the object that need to be combined and the rest is the argument passed in array [...args]
greet.apply(person, ["Test"]) // Hello, Maverick


// bind takes a function in the first and calls the object that need to be combined and the rest is the argument passed ...args
// bind usually return a function, so we have assigned it to a variable and executed the variable as a function
const bound = greet.bind(person, "Testing purpose")
bound() // Hello, Maverick // Testing purpose

// we can also execute the bind like this too, since it returns a function ,we can just add () braces at the end to execute directly
greet.bind(person, "Testing purpose")();

//bind

var obj = {
    name: "vicky",
    greet: ()=>{
        console.log(this.name) // this return undefined due to arrow function ,but we fix this using bind below
    }
}

var bound1 = obj.greet.bind(obj); // arrow functions ignore .bind, it has no effect.

bound1(); // ''

//

var obj = {
    name: "vicky",
    greet: function() { // ✅ normal function, not arrow
        console.log(this.name);
    }
}

var bound1 = obj.greet.bind(obj);

bound1(); // vicky

// if you want to use call, apply, bind, you must use normal function


function Button(name){
    this.name = name;
}

Button.prototype.click = function(){
    console.log(`${this.name} clicked`);
}

const savebtn = new Button("Save")

savebtn.click() // Save clicked

// but in settimeout, the this will not work, so we need to bind

function Button(name){
    this.name = name;
}

Button.prototype.click = function(){
    console.log(`${this.name} clicked`);
}

const savebtn1 = new Button("Save")

setTimeout(savebtn1.click, 1000) // '' clicked  

setTimeout(savebtn1.click.bind(savebtn1), 1000) // Save clicked

//preset args with bind

function multiply(a, b){
    return a*b;
}

var double = multiply.bind(null, 2) // here null is object we care notpassing, 2 is the 1st argument (a) in the multiple function
double(10); // here 10 is the 2nd argument (b) of the multiple function and it return // 20

//----------------------------------------------------------------------------
//prototypes and classes

//prototype

function test(name){
    this.name = name;
}

test.prototype.sayHi = function(){
    return `Hi ${this.name}`
}

var obj = new test("Vigneshwar");

obj.sayHi(); // Hi Vigneshwar


//classes

class Test{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hi ${this.name}`
    }
}

var obj = new Test("Vignesh");

obj.sayHi() // Hi Vignesh

//extending classes
class Animal{
    constructor(name){
        this.name = name
    }

    action(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    action(){
        console.log(`${this.name} Barks`)
    }
}

var obj1 = new Animal("Lizard");
var obj2 = new Dog("Dog")

obj1.action() // Lizard makes a sound
obj2.action() // Dog Barks

//----------------------------------------------------------------------------
//error handling (try/ catch)

try{
    console.log(JSON.parse('{"name": "Vignesh"}')); // {name: 'Vignesh'}
}catch(err){
    console.log(err); // if any error it will print like this // SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)
}

//there is also one more method called finally, which will run no watter what the output is

try{
    console.log("try") // try
    throw new Error("Custom Error")
}catch(err){
    console.log(err); // Custom Error
}finally{
    console.log("This always runs"); // This always runs
}

//----------------------------------------------------------------------------

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8 
// 9 
// 10 