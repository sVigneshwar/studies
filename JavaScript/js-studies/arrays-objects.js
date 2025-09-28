//----------------------------------------------------------------------------
// - Array methods: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `sort`

var arr = [1,2,3,4,5];

var arrayFunction = arr.map((val) => val * 2);

console.log(arrayFunction); // return updated array


var arr = [1,2,3,4,5];

var arrayFunction = arr.filter((val) => val % 2 === 0);

console.log(arrayFunction); // return filtered array

var arr = [1,2,3,4,5];

var arrayFunction = arr.reduce((acc, val) => acc + val);

console.log(arrayFunction); // return a single value


var arr = [1,2,3,4,5];

var arrayFunction = arr.forEach((val) => console.log(val * 2));

console.log(arrayFunction); // return nothing (can be used for looping)


var arr = [1,2,3,4,5];

var arrayFunction = arr.find((val) => val % 2 === 0);

console.log(arrayFunction); // return first value that mathces the condition


var arr = [1,2,3,4,5];

var arrayFunction = arr.some((val) => val % 2 === 0);

console.log(arrayFunction); // return boolean if any of the value mathces the condition


var arr = [1,2,3,4,5];

var arrayFunction = arr.every((val) => val > 0);

console.log(arrayFunction); // return boolean if all of the value mathces the condition


var arr = [1,4,5,2,3];

var arrayFunction = arr.sort((a, b) => a - b);

console.log(arrayFunction); // sort the array


//----------------------------------------------------------------------------
// - Object methods: `Object.keys`, `Object.values`, `Object.entries`

var person = {name: "vigneshwar", age: 29}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))



//----------------------------------------------------------------------------
// - Destructuring (arrays, objects)
//destructuring is unpacking of array or object
var arr = ["red", "blue", "yellow"];

var [a, b] = arr;

console.log(a)
console.log(b)

var obj = {name: "vic", age: 29};

var {name, age} = obj; // the variable on lhs should be the same name as keys

console.log(name);
console.log(age);


//----------------------------------------------------------------------------
// - Spread & rest operators

// spread - combine values in new variable
// rest - get rest of the values

var a = [1,2]
var b = [3,4]

var c = [...a, ...b]

console.log(c); // [1, 2, 3, 4]

var obj = {name: "vick", age: 29}

var obj2 = {...obj, working: true}

console.log(obj2);


var [x,y,...rest] = [1,2,3,4,5]
console.log(x)
console.log(y)
console.log(rest)

function test(b, ...values){ 
    return values.map((val)=> val * b);
}

test(10,1,2,3,4,5) // here the 10 is b. 1,2,3,4,5 is an seperate array values.

//the values we enter in the function argument is automalitacally an array. test(1,2,3,4,5)
//----------------------------------------------------------------------------

// 1 b
// 2 a
// 3 b
// 4 a
// 5 a
// 6 
// 7 
// 8 
// 9 
// 10 

//----------------------------------------------------------------------------

var arr = [100, "q","Vicky", 10, 8 , "C"];

var num = [];
var str = [];
var ch = [];

arr.map(val => {
    if(typeof val === "number"){
        num.push(val);
    }else {
        console.log(val.length)
        if(typeof val == "string" && val.length == 1){
            ch.push(val);
        }else{
            str.push(val);
        }
    }
})

console.log(num);
console.log(str);
console.log(ch);
