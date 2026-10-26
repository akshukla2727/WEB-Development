// if-else
// const isUserLoggedIn = true
const temperature = 37

// if (temperature < 45) {
//     console.log("Safe");
// } else {
//     console.log("Danger");
// }

const score = 250

// if (score > 100) {
//     console.log("You can Fly");
// } else {
//     console.log("You can't Fly");
// }

const balance = 1000
// if (balance > 500) console.log("Good"), console.log("...");     NOT A GOOD PRACTICE
// if, if-else, if-elseif-else => 3 types of conditional statements

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to Buy Course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
const loggedInFromGithub = false

if (loggedInFromGoogle || loggedInFromGithub || loggedInFromEmail) {
    console.log("User Logged In");
    
}