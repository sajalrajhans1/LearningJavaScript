let a = 10
const b = 20
var c = 30

// we should only use let and const, var is not good because it changes its value independent of scopes.

//Nested scopes

function one(){
    const username = "sajal"

    function two(){
        const website = "youtube"
        console.log(username; 
    }
    console.log(website); //gives error because out of scope

    two() // prints whatever is in function two
}
one() // prints whatever is in function one

