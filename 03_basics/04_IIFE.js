// Immediately Invoked Function Expressions (IIFE)
// The function which are invoked immediately to be safe from pollution from globalscope

(function chai(){ //named iife
    console.log(`DB Connected`);
})();

// IIFE as arrow functions:
( () => { // simple iife
    console.log(`DB connected TWO ${name}`);
})('sajal'); // giving argument here

