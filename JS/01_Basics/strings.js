const fullName = "Aditya Kumar Shukla" // string
const repoCount = "100" // string

// console.log(fullName + " " + repoCount) // Aditya Kumar Shukla 100 => concatenation

// console.log(`My Full Name is ${fullName} and I have ${repoCount} repositories.`)

const gameName = new String("Jai-Shree-Ram") // string object
// console.log(gameName.length)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.bold())
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("S"))
const newString = gameName.substring(4, 10)
// console.log(newString)

const anotherString = gameName.slice(1, 3)
// console.log(anotherString)

const newString2 = "     Aditya Kumar Shukla   "
// console.log(newString2)
// console.log(newString2.trim())
// console.log(newString2.trimEnd())

const url = "https://adityakumarshukla.com/aditya%20kumar%20shukla"
const newUrl = url.replace("%20", "-")
const newUrl2 = url.replaceAll("%20", "-")
// console.log(newUrl)
// console.log(newUrl2)

// console.log(url.includes("aditya")) // true
// console.log(url.includes("bhikari")) // false
// console.log(url.startsWith("https")) // true
// console.log(url.endsWith("shukla")) // false

const myString = "Aditya-Kumar-Shukla"

console.log(myString.split("-")) // ["Aditya", "Kumar", "Shukla"]
