let score = "100abc"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score) // convert to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN => Not a Number

/* "100" => 100 
   "100abc" => NaN 
   true => 1  false => 0
   "" => 0
   "abc" => NaN
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // true

// *********Operations*********

let str1 = "Hello"
let str2 = " Aditya"
// console.log(str1 + str2) // HelloAditya
// console.log(typeof (str1 + str2)) // string


let someNumber = 100
let stringNumber = "200"
console.log(someNumber + stringNumber) // 100200
console.log(typeof (someNumber + stringNumber)) // string

console.log(3 + 4 + "5") // 75
console.log("3" + 4 + 5) // 345
console.log("39" + "4" + 5) // 3945

// always use paranthesis to avoid confusion
