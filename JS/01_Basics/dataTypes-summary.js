// #Primitive Data Types
// 1. Number  2. String  3. Boolean  4. Null  5. Undefined  6. Symbol  7. BigInt

// JS is a dynamically typed language => we don't need to specify data type of variable

// Primitives are immutable => can't be changed
const accountId = 456142 // number
const accountName = "John Doe" // string
const isLoggedIn = true // boolean
const accountBalance = null // null
let accountEmail // undefined
const bigNumber = 123456789012345678901234567890n // bigint
const accountSymbol = Symbol("id") // symbol
const Symbol1 = Symbol("id")

// console.log(accountSymbol === Symbol1) // false => unique identifier

// #Reference Data Types
// 1. Object  2. Array  3. Function

const heroes = ["Iron Man", "Spider Man", "Thor"] // array

let myObj = {
    name: "Aditya",
    age: 20,
    isLoggedIn: false
} // object

const myFunction = function() {
    // function body
}

// console.log(typeof bigNumber) // bigint
// console.log(typeof myFunction) // function

// +++++++++++++++++++++ Stack vs Heap +++++++++++++++++++++

// STACK(Primitives) => stored in stack memory => faster access
// HEAP(Reference) => stored in heap memory => slower access

let myName = "Aditya" // stored in stack memory
let myName2 = myName // stored in stack memory => copy of myName
myName2 = "Aditya Kumar Shukla" // changing myName2 doesn't affect myName

console.log(myName) // Aditya
console.log(myName2) // Aditya Kumar Shukla

let myObj1 = {
    name: "Aditya",
    email: "aditya@example.com",
    age: 20
} // stored in heap memory

let myObj2 = myObj1 // stored in stack memory => reference to myObj1
myObj2.name = "Aditya Kumar Shukla" // changing myObj2 affects myObj1

console.log(myObj1.name) // Aditya Kumar Shukla
console.log(myObj2.name) // Aditya Kumar Shukla