const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][1])

// console.log(marvelHeroes.concat(dcHeroes))

const allHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allHeroes)

const num = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const anotherNum = num.flat(Infinity)
console.log(anotherNum)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({fullName: "Aditya"})) // we should tell that key ka ya value ka array bnana hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))