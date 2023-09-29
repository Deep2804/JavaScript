//Immediately Invoked Function Expressions(IIFE)

//global scope ke pollution se problem hoti hai kaai baar to jo global
//variable ke variable hai uske pollution ko htane ke liye IIFE ka usee kiya

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);

})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} )('deepak')
// chai()

