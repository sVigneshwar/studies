// --------------------------------------------------------

function fetchData(){
    return new Promise((resolve) => {
        console.log("fetching data...")

        setTimeout(() => {
            resolve({id:1, name: "vicky"})
        }, 2000)
    })
}

fetchData()
    .then(data => console.log('data received: '+ JSON.stringify(data)))

// --------------------------------------------------------

async function handleData() {
    try {
        console.log("fetching data...");
        
        // "await" pauses the function until the promise resolves
        const data = await fetchData(); 
        
        // Now 'data' is the actual object, not a promise
        console.log("data received:", data); 
    } catch (error) {
        // This replaces .catch()
        console.error("Something went wrong:", error);
    }
}

handleData();
// --------------------------------------------------------
function createCounter() {
    let count = 0; // This is the "private" variable

    return function() {
        count++; // The inner function has access to 'count'
        console.log(count);
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
// --------------------------------------------------------
function bankAccount(initialDeposit) {
    let balance = initialDeposit; // Hidden from the outside

    return {
        checkBalance: () => console.log(`Balance: $${balance}`),
        deposit: (amount) => {
            balance += amount;
            console.log(`Deposited $${amount}`);
        }
    };
}

const myAccount = bankAccount(100);
myAccount.deposit(50);
myAccount.checkBalance(); // 150
console.log(myAccount.balance); // undefined (it's protected!)
// --------------------------------------------------------

















































    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++