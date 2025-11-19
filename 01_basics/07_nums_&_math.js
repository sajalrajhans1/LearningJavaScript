const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number : 100]

console.log(balance.toString); //100, but it is a string now

console.log(balance.toFixed(2)) // shows precise upto 2 decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString()); // 1,000,000

// +++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math); // This will give the math object
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 5 - takes ceiling value
// Same with Math.floor - but takes floor value
console.log(Math.min(4, 3, 2, 5)); // 2, same with Math.max()

console.log(Math.random()); // Random number between 0 to 1

console.log((Math.random()*10) + 1); //Number between 1 and 10

//To get random between a specific range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // gives random number between 10 and 20



