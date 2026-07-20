var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a)
}

// console.log("Outer: ", a)
// console.log(b)
// console.log(c)



// Nested Scopes
/*
function one(){
    const username = "Talal"    // Global values for two() function

    // two() can access the global values but parent function one() can't access the child values
    function two(){
        const website = "youtube"
        console.log(username)
    }

    two()
}
one()
*/


if(true){
    const username = "Talal"
    if(username === "Talal"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)    // Can't access website
}
// console.log(username)   // // Can't access username



console.log(addone(5))
function addone(num){
    return num + 1
}

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))