export function sum(a, b){
    return a + b
}

export function isLegalAge(age){
    return age >= 18
}

export function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

export function fetchUser(){
    return Promise.resolve({id: 1, name: "Test"})
}

export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/; 
  return regex.test(email);
}

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
