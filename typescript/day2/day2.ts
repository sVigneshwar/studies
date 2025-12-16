// day 2: function, narrowing & literals
//-------------------------------------------------------
// 1) function parametrs and return types
function sum(a:number, b:number):number{
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
// 3)