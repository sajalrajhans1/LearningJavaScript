// Dates

let myDate = new Date()
console.log(myDate); // prints a date object which is not readble at all 
console.log(myDate.toString()); //Changes to string
console.log(myDate.toDateString); //another way to print date
console.log(myDate.toLocaleDateString); //another way to print date
console.log(typeof myDate); //object

let myCreatedDate = new Date(2025, 11, 19) //month in javascript start from index 0, this date is 19th decemeber 2025 
console.log(myCreatedDate.toDateString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); //prints minisecond value from 1st jan 1970
console.log(myCreatedDate.getTime()); //prints miniseconds from 1st jan 1970 to the created date, so we can compare both the dates 

console.log(Math.floor(Date.now()/1000)); //to print in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //we get the month, +1 because indexing starts from 0.
// Same with getDay and etc. 

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})



