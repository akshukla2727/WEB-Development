const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`accumulator ${acc} & Current Value ${currval}`);
    return acc + currval
}, 0)

// also we can with arrow function
console.log(myTotal);
