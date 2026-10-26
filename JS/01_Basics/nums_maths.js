const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toFixed(2))

const myNum = 100.123456789
// console.log(myNum.toFixed(2)) // 100.12
// console.log(myNum.toPrecision(5)) // 100.12
// console.log(myNum.toPrecision(2)) // 1.0e+2
// console.log(myNum.toExponential(2)) // 1.00e+2

const hunderds = 1000000
// console.log(hunderds.toLocaleString()) // 1,000,000
// console.log(hunderds.toLocaleString("en-IN")) // 10,00,000
// console.log(hunderds.toLocaleString("de-DE")) // 1.000.000
// console.log(hunderds.toLocaleString("ja-JP")) // 1000000


// ++++++++++++++++++++++ Math Object +++++++++++++++++++++

// console.log(Math.PI) // 3.141592653589793
// console.log(Math.abs(-4.7)) // 4.7
// console.log(Math.round(4.7)) // 5
// console.log(Math.floor(4.7)) // 4
// console.log(Math.ceil(4.7)) // 5
// console.log(Math.trunc(4.7)) // 4
// console.log(Math.pow(4, 2)) // 16
// console.log(Math.sqrt(16)) // 4
// console.log(Math.min(0, 150, 30, 20, -8, -200)) // -200
// console.log(Math.max(0, 150, 30, 20, -8, -200)) // 150

console.log(Math.random())
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)