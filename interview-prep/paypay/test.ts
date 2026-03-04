const prices:number[] = [10,1,5, 3, 4 ,6,7,1];

function maxProfit(prices:number[]):number {
    
    let left:number = 0;
    let right:number = 1;
    let maximumProfit = 0;

    while(right < prices.length){

        console.log(`checking index ${left} and ${right}, checking values are ${prices[left]} and ${prices[right]} of array [${prices}]`)

        const leftPrice = prices[left];
        const rightPrice = prices[right];

        if(leftPrice !== undefined && rightPrice !== undefined && leftPrice < rightPrice){

            let profit = rightPrice - leftPrice

            maximumProfit = Math.max(profit, maximumProfit)

        }else{
            left = right
        }

        right++

    }

    console.log(maximumProfit);
    
    return maximumProfit;
    
}

maxProfit(prices)
// -------------------------------------------------------------------

/* const strs = ["act","pots","tops","cat","stop","hat"]

groupAnagrams(strs) // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]


// if(strs.length === 1){
    //     res.push(strs[0])
    //     return res
    // }

function groupAnagrams(strs:string[]) {
    let res: {[key: string]: string[]} = {}
    
    for(let s of strs){
        const sortedS = s.split("").sort().join("");

        if(!res[sortedS]){
            res[sortedS] = []
        }

        res[sortedS].push(s)

        // console.log(res)
    }
    console.log(res)
    console.log(Object.values(res))
    return Object.values(res)
} */
// -------------------------------------------------------------------
/* const nums:number[] = [3,5,4,6, 10]
const target:number = 7

twoSum(nums, target)

function twoSum(nums:number[], target:number) {
    const map = new Map()

    for(let i:number = 0; i < nums.length; i++){      
        let diff = target - nums[i]!
        // console.log(map.keys())
        // console.log(`target is 7, looping item ${i}, looping number is ${nums[i]}, differece is ${diff},if map has difference - ${map.has(diff)}`);
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
} */


// -------------------------------------------------------------------

/* const s:string = "racecar", t:string = "carrace"

isAnagram(s, t)

function isAnagram(s:string, t:string) {
    if(s.length !== t.length){
        return false
    }

    let map = new Map<string, number>()

    for(let word of s){
        map.set(word, (map.get(word) || 0) + 1)
    }

    for(let word of t){
        map.set(word, (map.get(word) || 0) - 1)
    }

    return map.size === 0
} */

// -------------------------------------------------------------------
/* type Number = number 

const nums: Number[] = [3, 2, 4, 3, 1]

hasDuplicate(nums)

function hasDuplicate(nums: Number[]) {
    const map = new Map<Number, number>()
    let match = false

    for(let num of nums){
        if(map.has(num)){
            match = true
        }

        map.set(num, 1)
    }

    return match
} */
// -------------------------------------------------------------------
/* type Users = {
    name: string,
    role: string
}

const users: Users[] = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
  { name: "Eve", role: "guest" }
];

function main(input:Users[]) {
    let result: {[key: string]: string[]} = {}

    for(let {name, role} of input) {
        if(!result[role]){
            result[role] = []
        }else{
            result[role].push(name)
        }
    }

    return result
}

main(users);

// var output = {
//   admin: ["Alice", "Charlie"],
//   user: ["Bob", "David"],
//   guest: ["Eve"]
// } */