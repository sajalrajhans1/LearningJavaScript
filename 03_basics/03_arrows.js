const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log((`${this.username}, welcome to website`));
        
    }

}

user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //output: undefined
// }

const chai = () => {
    let username = "hitesh"
    console.log(this); // still gives undefined
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

console.log(addTwo(3,4)); //returns 7

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
