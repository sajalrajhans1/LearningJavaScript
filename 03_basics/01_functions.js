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

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // all these parameters can be put in the function

const user = {
    username :"sajal",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username : "Sam",
    price: 399
})

const myNewArray = [200, 400, 100]

function returnSecondValue(getArray){
    return getArray[i]
}

// console.log(returnSecondValue(myNewArray));
console.timeLog(returnSecondValue([200, 400, 500, 2000]));