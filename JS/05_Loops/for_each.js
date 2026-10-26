const coding = ["js", "ruby", "py", "cpp", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } ) // we can also use arrow function

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        langName: "JAVA",
        extension: "java"
    },
    {
        langName: "C++",
        extension: "cpp"
    },
    {
        langName: "Python",
        extension: "py"
    }
]

// myCoding.forEach(function (item) {
//     console.log(item);
// })

const val = myCoding.forEach(function (item) {
    // console.log(item);
})

// console.log(val); // for each return nothing or undefined

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter((num) => num>4)

// const newNums = myNum.filter((num) => {
//    num>4
// })

const newNums = myNum.filter((num) => {
    return num>4
}) // for {scope} we must write return keyword 
// console.log(newNums);

// const newNum = myNum.map((num) => num+10)

const newNum = myNum
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num>=40)
console.log(newNum);
