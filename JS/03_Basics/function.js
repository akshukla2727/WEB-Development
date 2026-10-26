// function sayMyName() {
//     console.log("A");
//     console.log("D");
//     console.log("I");
//     console.log("T");
//     console.log("Y");
//     console.log("A");
// }

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumber(num1, num2) {
    return num1 + num2
}

const result = addTwoNumber(3, 4)
// console.log(result)

function loginUserMessage(username) {
    return `${username}, just logged in`
}

// console.log(loginUserMessage("ADITYA"))
// console.log(loginUserMessage()) // undefined
// console.log(loginUserMessage(""))

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(400, 500, 300))

const user = {
    username: "Aditya",
    price: 100
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user

handleObject({
    username: "hitesh",
    price: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
