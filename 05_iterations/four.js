const coding = ["js", "ruby", "cpp", "python"]

// coding.forEach(  function (item) {
//     console.log(item);
// }  )

// coding.forEach(  (value) => {console.log(value);}  )

// function printME(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => { 
    console.log(item, index, arr);  
})