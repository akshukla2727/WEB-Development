const userEmail = "aditya@example.com"

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't Get User Email");
}

// FALSY VALUE
// false, 0, -0, BigInt, null, undefined, NaN, 0n

// TRUTHY VALUE
// "0", "false", " ", [], {}, function() {}

const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operater (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// Terniary Operater
// condition ? true : false
