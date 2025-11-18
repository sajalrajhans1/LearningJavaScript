const name = "sajal"
const repoCount = 3

// console.log(name + repoCount + "Value"); // This syntax is outdated even though this works, not recommended to use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('velesfps')

console.log(gameName[0]); //v
console.log(gameName.__proto__); //object gets printed

console.log(gameName.length); //8
console.log(gameName.toUpperCase()) //VELESFPS, but original value is not changed
console.log(gameName.charAt(2));  // l
console.log(gameName.indexOf('l')) // 2

const newString = gameName.substring(0, 4) 
console.log(newString); //vele, does not change original value

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //vele, does not change original value

const newStringOne = "    Sajal    "
console.log(newStringOne); // abovevalue
console.log(newStringOne.trim()); //Sajal

const url = "https://sajal.com/sajal%20rajhans"

console.log(url.replace('%20', '-')); //replaces %20 to -

console.log(url.includes('sajal')); //true, because sajal is present in the url

console.log(gameName.split('-')); //gives all the strings which are separted by - in the orignial gameName string

 