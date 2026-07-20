// Immediately Invoked Function Expression

(function chai(){
    // named IIFE
    console.log("DB connected")   
})();

// when we make two immediately invoked functions we have to write semicolon (;) to stop the 1st function
( (name) => {
    console.log(`DB connected 2 ${name}`)
})("Talal")