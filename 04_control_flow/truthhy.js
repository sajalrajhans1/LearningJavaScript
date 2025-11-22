const userEmail = "sajal@fmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); //prints 5

let val2 = null ?? 10
console.log(val2); // prints 10

// Ternary operator
// condition ? true : false



