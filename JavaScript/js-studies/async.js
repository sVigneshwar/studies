//----------------------------------------------------------------------------
// event loops and callstack

//callstack - stores all js function calls
//web api (browser side api's) - handle async work like settimeout, fetch...
//callback queue - once js fucntions is done, callbacks are placed here
//event loop - is call stackempty? then call next js or callback js

console.log("Start")
setTimeout(()=>console.log("Middle"))
console.log("End")


//----------------------------------------------------------------------------
// callback

function test(value, callback){
    console.log(value * 2);
    console.log(callback);
}

function test2(){
    return "Hello i am callback"
}

test(10, test2())

// top and bottom both are same, callbacks are called differently

function test(value, callback){
    console.log(value * 2);
    callback()
}

test(10, ()=>console.log("Hello i am callback"));


//----------------------------------------------------------------------------
// promise

//promise is a value, that may be available now, later or never

//pending - waiting
//resolved - success
//rejected - failed

var p = new Promise((resolve, reject) => {
    let success = true;
    success = false;

    if(success){
        resolve("Success")
    }else{
        reject("Failed")
    }
})

p.then(result => console.log(result)).catch(error => console.log(error));

// promise can be writtern like below too

new Promise(resolve => resolve("Resolved"));

new Promise(reject => reject("Resolved")); // this still resolve snce the naming does not matter to js

new Promise((_, reject) => reject(new Error("Custom error"))) // but this is the proper rejetc format without resolve
  .catch(err => console.log("Error:", err.message));

//1st arg is always resolve and 2nd one is always reject

//

function successCall(){
    return "successCall called"
}

function wait(ms){
    return new Promise((resolve, reject) => {
        if(ms > 0){
            setTimeout(()=>{
                resolve(successCall())
            }, ms)
        }else{
            reject("Error")
        }
    })
}

wait(1000)
    .then(res => console.log(res))
    .catch(err => console.log(err))

//async version of abive code


function successCall(){
    return Promise.resolve("Success")
}

async function wait(){
   try{
    await successCall();
    console.log("Wait completed") // wait completed
   } catch(err){
    console.log(err); // ReferenceError: successCall is not defined
   }
}

wait()

//

// i tried this, what may be the issue? i think the if condition is issue here 
function something(value){ 
    return new Promise((resolve, reject) => typeof value === "number" ? resolve("It is a number") : reject("It is Other data type")) 
        .then(result => result) 
        .catch(error => error) 
    } 
something(10) // It is a number
something("test") // It is Other data typ

//promise.all

//basically has a array of promise
//only return when all the promise are complete or reject
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All done:", results);
  })
  .catch(error => {
    console.error("One failed:", error);
  });

//
function wait(ms, value){
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

Promise.all([
    wait(1000, "One"),
    wait(2000, "Two"),
    wait(3000, "Three"),
]).then(res => console.log(res)).catch(err => console.log(err))

//the result will be displayed in array after 3 seconds, the promise return only after all the functions are resolved

Promise.all([
    wait(1000, "One"),
    wait(2000, "Two"),
    wait("test", "Three"),
]).then(res => console.log(res)).catch(err => console.log(err))

//this  one also works, but the value "test" is taken as 0 seconds in the setimeout, so the promise gets resolved in 2 seconds and the result are shown in 2 seconds instead of 3 seconds on the above promise call

//with rejection
function task(value, shouldFail = false){
    return new Promise((res, rej) => {
        if(shouldFail){
            rej(`Failed at ${value}`)
        }else{
            res(value)
        }
    })
}

Promise.all([
    task("first"),
    task("2nd", true),
    task("3rd")
])
    .then(res => console.log(res)) // ['first', '2nd', '3rd']
    .catch(err => console.log(err)) // Failed at 2nd

//with async and wait

async function runTasks() {
  try {
    const results = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then(r => r.json())
    ]);
    console.log("Results:", results);
  } catch (err) {
    console.log("Error:", err);
  }
}

runTasks(); // [{…}, {…}]

//----------------------------------------------------------------------------
// async await

//makes a async code look like sync
//use await inside a async function only

function wait(ms){
    return new Promise(resolve => setTimeout(()=>resolve("Resolved"), ms))
}

async function test(){
    console.log("start")
    var p = await wait(1000) // await until promise gets resolved
    console.log(p)
    console.log("Ends after 1 second")
}

test();

//
// the signature of settimeout is below
setTimeout(callback, ms, ...arguemt);
//her callback is any function or we can write a direct funcion inside
// ms is time
// ...arguement is the argument of the callback function to be used

// so the above example can be wriiter also like below
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms, "Resolved"))
}

async function test(){
    console.log("start")
    await wait(1000).then(res => console.log(res))// await until promise gets resolved
    console.log("Ends after 1 second")
}

test();

//rejection scenario

function fail(){
    return new Promise((_, reject) => {
        reject("Failed")
    })
}

async function test(){
    try{
        var p = await fail()
        console.log(p)
    }catch(err){
        console.log(`Failed scenario:${err}`);
    }
}

test()

// when you dont want the entirefunction to stop until the response, try/catch method is not needed, we can use promise then/catch method


//If you await a non-Promise value (like a number, string, object, etc.),
//JavaScript automatically wraps it in Promise.resolve(value).

async function run() {
  let result = await 42;   // JS turns it into: await Promise.resolve(42);
  console.log(result);
}
run();
//
function maybegetdata(val){
    if(val){
        return "data value return"
    }else{
        return new Promise(resolve => resolve("data promise return"))
    }
}

async function run(){
    let a = await maybegetdata(true)
    console.log(a);
    let b = await maybegetdata(false)
    console.log(b);
}

run()

//----------------------------------------------------------------------------
// fetch

// fetch using promise

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// fetch using async and await

async function getData(){
    try{
        var fet = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        var res = await fet.json()

        console.log(res)
    } catch (error){
        console.log("Error:"+Error)
    }
}

getData()

//

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP Error " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data)) // datas
  .catch(error => console.error("Fetch error:", error)); // VM10454:9 Fetch error: Error: HTTP Error 200

//----------------------------------------------------------------------------

// 1 b
// 2 b
// 3 a
// 4 b
// 5 b
// 6 
// 7 
// 8 
// 9 
// 10 