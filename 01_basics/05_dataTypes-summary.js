//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//js is dynamic programming language.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Luffy", "Zoro", "Sanji"]
let myObj ={
    name: "Sajal",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myName = "sajalRajhans"
let anotherName = myName
anotherName = "Jay"
console.log(myName); //sajalRajhans
console.log(anotherName); // Jay 
// because passed by value - goes into stack

let userOne = {
    email: "user@google.com",
    upi: "user@abc"
}

let userTwo = userOne

userTwo.email = "abcd@google.com"

console.log(userOne.email); //abcd@google.com
console.log(userTwo.email); //abcd@google.com
// becuase passed by reference - goes into heap

