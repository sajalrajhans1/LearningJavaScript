//array

const myArr = [0 ,1 ,2, 3 ,4 ,5]
const myHeroes = ["Luffy", "Zoro", "Sanji"]

const myArr2 = new Array(0, 1, 2, 3, 4)

//Array methods
myArr.push(6) // adds 6 at last
console.log(myArr); // myArr with 6 at end
myArr.pop() //removes the last element from the array

myArr.unshift(9) // adds at start
myArr.shift() // removes the first element

console.log(myArr.includes(9)); // returns true or false
console.log(myArr.indexOf(3)); // returns the index of 3

const newArr = myArr.join

console.log(myArr); //prints the array
console.log(newArr); //prints the array as string

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

// slice returns a new array without changing the original, while splice modifies the original array by adding/removing elements.


