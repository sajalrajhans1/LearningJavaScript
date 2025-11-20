// singleton - When we declare as literals, then singleton nhi banta hai

// object literals

const mySym = Symbol("key1") // this is declaring a symbol

const JsUser = {  //declaring an object 
    name : "Sajal", // key:value
    age: 20,
    //using symbol as a key: 
    [mySym] : "mySymbol",
    location: "Bengaluru",
    email: "sajal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

//Access the object:
console.log(JsUser.email); // this can only access if the key name doesn't have spaces
console.log(JsUser["email"]); //this helps if the name of key has spaces

JsUser.email = "sajal@chatgpt.com" // changing the value of JsUser.email
// Object.freeze(JsUser) // this freezes all the values of JsUser. No one can change the values anymore

JsUser.greeting = function () { //adding a function 
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // output : undefined 
console.log(JsUser.greeting()); // This will give output according to the function