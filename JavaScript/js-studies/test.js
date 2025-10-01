// -----------------------------------------------------------------------------------
// basic fetch strucuture
fetch("someurl")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=> console.log(err))


// -----------------------------------------------------------------------------------
// basic async await strucuture

function wait(ms){
    return new Promise((resolve, reject) => {
        var something = false;
        setTimeout(()=>{
            if(something){
                resolve("Success")
            }else{
                reject("Failed")
            }
        }, ms)
    })
}


async function test(){
    try{
        var p = await wait(2000)
        console.log(p)        
    }catch(err){
        throw Error(err)
    }
    console.log("ended after 2000 ms")
}

test()

// -----------------------------------------------------------------------------------
// basic promise strcuture

var data = new Promise((res, rej) => {
    var something = true;
    if(something){
        return res("Resolved")
    }else{
        return  rej("Rejected")
    }
})

data.then(res => console.log(res)).catch(err => console.log(err));


// -----------------------------------------------------------------------------------
// Example function: resolves or rejects randomly
const prom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("✅ Success from server")
        : reject("❌ Server Error")
    }, 1000);
  });
};

const retry = (fn, retries) => {
  return fn().then(
    (res) => res, // success: resolve immediately
    (err) => {
      if (retries > 1) {
        console.log(err + " ,Retrying...");
        return retry(fn, retries - 1); // retry
      }
      return Promise.reject(err); // no retries left → reject
    }
  );
};

retry(prom, 3)
  .then((res) => console.log("Resolved:", res))
  .catch((err) => console.log("Rejected:", err));
