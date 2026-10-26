// const tinderUser = new Object() // Singleton Object

const tinderUser = {} // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "adi@gamil.com",
    fullName: {
        userFullName:{
            firstName: "Aditya",
            middleName: "Kumar",
            lastName: "Shukla"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "adi@yahoo.com"
    },
    {
        id: 2,
        email: "aditya@gmail.com"
    },
    {
        id: 3,
        email: "aditya@microsoft.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: Instructor} = course

// console.log(courseInstructor)
console.log(Instructor)

// const navbar = ({company}) => {
     
// }

// navbar(company = "hitesh")

// JSON => {} basically a object with no name