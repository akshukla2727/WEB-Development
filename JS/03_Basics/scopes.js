var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// Global Scope when we write anything outside {this}
// Local Scope when we write anythide inside {this}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Aditya"

    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)

    two()
}
one()

if (true) {
    const username = "Aditya"
    if (username ==="Aditya" ) {
        const website = "microsoft"
        // console.log(username + " " + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addOne(6))
function addOne(num) { 
    return num + 1
}

addTwo(8)
const addTwo = function(num) { // Hoisting method to define function
    return num + 2
}
