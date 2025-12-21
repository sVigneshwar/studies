function getFirstElement<elementType>(arr: elementType[]){
    return arr[0]
}

let numberArr = [1,2,3]
getFirstElement(numberArr)

let stringArr = ["one", "two", "three"]
getFirstElement(stringArr)

let mixedArr = ["one", 2]
getFirstElement(mixedArr)
// ---------------------------------------------------------------------------------------
const input = document.querySelector<HTMLInputElement>(".input")
input?.value
// ---------------------------------------------------------------------------------------

type ApiResponse<Data> = {
    data: Data,
    isError: boolean
}

type userResponse = ApiResponse<{name: string, age: number}>
type blogResponse = ApiResponse<{title: string}>

const response:blogResponse  = {
    data: {
        title: "vicky",
        // age: 29
    },
    isError: false
}