const myArr = [0, 1, 2, 3, 4, 5]
const heroes = new Array("shaktiman", "spider-man", "balveer")

// console.log(myArr)
// console.log(myArr.length)
// console.log(myArr[5])

// Array Method

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(-1)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(8))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)

// slice not change array but splice changes the array
