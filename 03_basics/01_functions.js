function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("L");
} 

// sayMyName()

// // this is not returning anything
// function addTwoNums(number1, number2) {
//     console.log(number1 + number2);
// }

//This function returns:
function addTwoNums(number1, number2) {
    return (number1 + number2);
}

console.log(addTwoNums(2,3)); // output : 5

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
