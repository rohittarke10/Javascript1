// Immediately invoked Functions

// used to immediately call a function
// you want to avoid polluting the global scope with function names
// ex connect to database immediatley when app is opened

// syntax
(function connect(){
    // named iife
    console.log("DB Connected");  
})()
// use semicolon to end the function and then u can write a another function else error
// arrow function iife
((name) => {
    // unamed iife
    console.log(`connected ${name}`)
})("rohit") // for this function to execute above iife should be ended with;

// L25 for Javascript execution context


