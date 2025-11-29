const myNums = [1, 2, 3, 4, 5, ,6 , 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 )
// console.log(newNums);

// if we are opening a scope, we need to use a keyword return

// chaining
const newNums = myNums
                    .map((num) => num*10)
                    .map( (num) => num+1)
                    
