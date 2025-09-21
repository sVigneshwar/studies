//------------------------------------------------------------------------------

//Function declaration vs expression 

test("vicky"); // fucntion decalaration can be hoisted
function test(name){
    return `hello ${name}`
}

const test1 = function(name){
    return `hello ${name}`
}

console.log(test1("mavick")) // expression cannot be hoisted since it is a variable only


//------------------------------------------------------------------------------

//Arrow functions 

const add = (a,b) => a+b;

add(1,2);


//------------------------------------------------------------------------------

//Default & rest parameters 

function add(a, b=2){ // b is default parameter
    return a+b;
}

add(5);

function add(...numbers){ // default function
    return numbers.reduce((acc, value) => acc + value, 0)
}

//arrow function
const add = (...numbers) => numbers.reduce((acc,val) => acc + val, 0);


add(1,2,3,4,5);



//------------------------------------------------------------------------------

//Higher-order functions
//A higher-order function either takes a function as an argument or returns a function.

function outerfunction(a, b, innerfunction){
    return innerfunction(a, b);
}

const add = (a, b) => a + b;

outerfunction(1, 2, add);


function outerfunction(value1){
    return function(value2){
        return value1*value2;
    }
}

var testing1 = outerfunction(10);
testing1(10); // this runs like below
// outerfunction(10)(10), this also returns 100


//------------------------------------------------------------------------------

// arrow function do not bind thier own "this" keyword

const person1 = {
    name: "vick",
    age: function(){
        return `${this.name} is young age`
    }
}

console.log(person1)

const person2 = {
    name: "vick",
    age: () => `${this.name} is young age`
}

console.log(person2.age()) //  is young age

//use normal function for this to work, since arrow function does not work for call, apply, bind too

//------------------------------------------------------------------------------

function Timer(){
    this.seconds = 0;

    setInterval(()=>{
        this.seconds++;
        console.log(this.seconds);
    }, 1000)    
}

new Timer();

//new creates a new object named timer and stores the this.seconds inside that object which can be used inside the timer scope
//basically it creates a small scopr of which the values can be used inside itself, 
// in this case, the arrow function value "this" will refer to the timer scope 

//------------------------------------------------------------------------------

// Example: Class + Constructor

//class uses one function and calls multiple times it seems, (so it saves some memory it seems)
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method (any function inside a class is called method)
    greet(){
        console.log(`hi i am ${this.name}, my age is ${this.age}`)
    }
}

const p1 = new Person("vick", "29")
const p2 = new Person("mavick", "2")

p1.greet()
p2.greet()


//------------------------------------------------------------------------------

// 1: b
// 2: c
// 3: c
// 4: d
// 5: b
// 6: c
// 7: c
// 8: c
// 9: d
// 10: b

//------------------------------------------------------------------------------

function introduce(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

const person = { name: "Vignesh" };

introduce.call(person, "Chennai", "India");  
// I am Vignesh from Chennai, India

introduce.apply(person, ["Tokyo", "Japan"]);  
// I am Vignesh from Tokyo, Japan

const boundFn = introduce.bind(person, "Paris");
boundFn("France");  
// I am Vignesh from Paris, France

//------------------------------------------------------------------------------

class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(this.label + " clicked");
  }
}

const button = new Button("Save");

// button.click(); 

setTimeout(button.click.bind(button), 1000);

// bind function takes a object as a arguement, to connect whatever it is running to the objetc "this" value;

functionName.bind(objectName);
functionName.bind(objectName);

//------------------------------------------------------------------------------

const testingPurpose1 = {
    x: "1",
    y : function() { return `${this.x} is a number`; }
}

const out = testingPurpose1.y.bind(testingPurpose1);
console.log(out());

//------------------------------------------------------------------------------

class testingPurpose2 {
    constructor(x){
        this.x = x;
    }

    y(){
        console.log(`${this.x} is a small number`);
    }
}

var out2 = new testingPurpose2(10);

setTimeout(out2.y.bind(out2), 1000)
