function myName() {
    console.log("T")
    console.log("a")
    console.log("l")
    console.log("a")
    console.log("l")
}
// myName()



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers() // return => NaN
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2

    // Jab humne return likh dia to us k baad function k andar aage jitna bhi code ho ga wo nhi chale ga
    // console.log("Talal")
}
// const res = addTwoNumbers(3, 5)  // 8
// console.log(`Result: ${res}`)   // => Result: undefined




/*
function loginUserMessage(username = "Sam`"){
    // if(username === undefined){
    //     console.log("Please enter username")
    //     return
    // }

    if(!username){
        console.log("Please enter username")
        return
    }

    return `${username} is logged in.`
}

console.log(loginUserMessage("Talal"))
// console.log(loginUserMessage()) // return => undefined is logged in.
*/



// Rest Operator
// ... ka matlab hai jab humare paas variable kam ho lekin values ziada hon jese neeche example mein hai
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400,  500, 2000))



const user = {
    username: "Talal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
}
// handleObject(user)



// Passing the direct object
// handleObject({
//     username: "sam",
//     price: 199
// })


// const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600, 800]))