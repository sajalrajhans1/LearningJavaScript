// forEach loop doesn't return any value, we cant use return item
// so we use the filter method:

const myNums = [1, 2, 3, 4, 5, 5, 6, 7, 8 ,9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums); // prints all nums greater than 4

//same thing to write with return
// const newNums = myNums.filter( (num) => {
//     return num > 4
// }) // this also returns nums greater than 4.

// return using forEach:

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num) // we just cant directly return the num.
//     }
// })

// console.log(newNums);

