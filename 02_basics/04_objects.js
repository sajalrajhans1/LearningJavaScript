// const tinderUser = new Object() // singleton object

tinderUser = {} // not singleton object

tinderUser.id = "123abc"
tinderUser. name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName: "Sajal",
            lastName: "Rajhans"
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName);

//combining two objects
const obj1 = {1 : "A", 2: "b"}
const obj2 = {3: "A", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2) // not very much used syntax
console.log(obj3); // prints the obj3

const obj4 = {...obj1, ...obj2} //most used syntax (spread operator)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email

//to bring out keys or values from the object
console.log(Object.keys(tinderUser)); // gives all the keys
console.log(Object.values(tinderUser)); // Gives all the values 
console.log(Object.entries(tinderUser)); // gives all the entries





