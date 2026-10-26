// Object.create

// Object literals
const mySym = Symbol("key1")

const JSUser = {
    fullName : "Aditya",
    age: 18,
    [mySym]: "mykey1",
    email: "aditya@example.com",
    location: "New Delhi",
    isLoggedIn: false,
    lastLoginDays:["saturday", "wednesday"]
}

// console.log(JSUser.email)
// console.log(JSUser["email"])
// console.log(JSUser[mySym])

//  Object.freeze(JSUser)
 JSUser.email = "aditya@google.com"
//  console.log(JSUser.email)

 JSUser.greeting = function(){
    console.log(`Hello JS user, ${this.fullName}`)
 }

 console.log(JSUser.greeting())
