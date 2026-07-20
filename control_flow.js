/*
const month = "1"
switch (month) {
    case 1:
        console.log("January")
        
    case 2:
        console.log("Feb")
        
    case 3:
        console.log("March")
        
    case 4:
        console.log("April")
        

    default:
        console.log("Default case")
        break;
}

*/

// without break it prints all the cases except default, start from where case match



// const userEmail = "talal@gmail.com" // it is considered true
// const userEmail = "" // it is considered false
const userEmail = [] // it is considered true
if(userEmail){
    // console.log("Got user email.")
} else{
    // console.log("Don't get user email.")
}

// Falsy values:
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy values:
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    // console.log("Array is empty")
}


const myObj = {}

// Object.keys(myObj) return the keys in the form of array
if(Object.keys(myObj).length === 0){
    // console.log("Object is empty.")
}


// false == 0 => true
// false == '' => true
// 0 == '' => true




// Nullish Coalescing Operator (??): null defined
let val1
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
val1 = null ?? 10 ?? 20 // 10
// val1 = undefined ?? 10  // 10
// console.log(val1)



// Ternary Operator
// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 100 ? console.log("Greater than or equal to 100.") : console.log("Less than 100.")