const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes); // prints marvel heroes with dc heroes as an element.

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes); // same output as above

//how to properly merge two arrays using concat
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

//Spread Operator - kaach ka glass drop kiya toh spread hojayega 

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes) // same output as properly concatenation 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat[Infinity]
console.log(real_another_array); // this returns the another array in a normal way, in a usable way.

console.log(Array.isArray("Sajal")); // checks if the given thing is array or not

console.log(Array.from("Sajal")); //converts sajal to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns an array of the variables.


