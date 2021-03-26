const numbers = [2, 3, 5, 7, 9]

const reducerNumbers = (accumulator, currentValue) => accumulator + currentValue
const total = numbers.reduce(reducerNumbers)

console.log("Total: ", total)
// Total: 26