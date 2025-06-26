// Immediately Invoked Function Expressions (IIFE)
// Why???
// 2 major reasons ************

// (i) For immediately execution
// (ii) To deal with global scope pollution

// To write two or multiple IIFE one should be end with semicolon ; bcoz invoke ho jata hai par pata nhi rukna kaha hai

//(function)(immediate invoked)

// Named IIFE
(function connectToDB(){
    console.log("CONNECTED")
})();

// Simple IIFE
((hello) => {
    console.log(`CONNECTED AGAIN ${hello}`)
})("Kunal")