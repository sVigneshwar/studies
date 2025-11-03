//-----------------------------------------------------
// STEP1: GET

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))
    

//-----------------------------------------------------
// STEP2: GET (Specific ID)

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))

//-----------------------------------------------------
// STEP3: POST

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: 'POST',
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         title: "Testing purpose"
//     })
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))

//-----------------------------------------------------
// STEP4: PUT

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: 'PUT',
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         id: 1,
//         title: "Testing purpose"
//     })
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))

//-----------------------------------------------------
// STEP5: PATCH
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: 'PATCH',
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: "Testing purpose"
//     })
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))

//-----------------------------------------------------
// STEP6: DELETE
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: 'DELETE',
//     headers:{
//         "Content-Type": "application/json",
//     }
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("runs at last"))

//-----------------------------------------------------
// STEP7: USING AXIOS

// get
// axios.get("url")
//     .then(res => console.log(res.data))
//     .catch(error => console.log(error))

// post
// axios.post("url", {
//     name: "vicky",
//     details: "details"
// }).then(res => console.log(res.data))

//-----------------------------------------------------
// CHECK HTTPS MANUALLY

// fetch("https://jsonplaceholder.typicode.com/unknown")
//     .then(res => {
//         if(!res.ok){
//             throw new Error("manual error")
//         }
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log("Recieved a", error))

//-----------------------------------------------------

