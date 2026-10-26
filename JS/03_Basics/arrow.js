const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Our Website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Shashank"
// user.welcomeMessage()
console.log(this);

// function chai() {
//     console.log(this);
// }
// chai()

const chai = function() {
    let username = "Aditya"
    console.log(this);
    
}
chai()

// const addTwo = (num1, num2) => num1 +num2
// const addTwo = (num1, num2) => (num1 +num2)
const addTwo = (num1, num2) => ({username: "Aditya"})

console.log(addTwo(3,7))