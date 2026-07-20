const user = {
    username: "Talal",
    price: "Rs.999",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        console.log(this)   // print cuurent context
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// Talal, welcome to website.
// {
//   username: 'Talal',
//   price: 'Rs.999',
//   welcomeMessage: [Function: welcomeMessage]
// }
// Sam, welcome to website.
// {
//   username: 'Sam',
//   price: 'Rs.999',
//   welcomeMessage: [Function: welcomeMessage]
// }



// console.log(this)   // return => {}
// jab hum node environment mein hote hain to this keyword emoty object {} ko refer karta hai
// jab hum console.log(this) ko browser pe run karte hain to is ka global object wwindow hota hai




// function coffee(){
//     console.log(this)
// }
// coffee()
// jab humne this ko function k andar rakha to is ne humen bohat ziada values dein



// function coffee(){
//     let username = "Talal"
//     console.log(this.username)  // return => undefined
//     // this keyword function k andar kaam nhi kar raha
// }
// coffee()



// now we discuss arrow function
// const coffee = function(){
//     let username = "Talal"
//     console.log(this.username)  // return => undefined
//     // this keyword function k andar kaam nhi kar raha
// }
// coffee()





const coffee = () => {
    let username = "Talal"
    // console.log(this.username)  // return => undefined
    console.log(this)  // return => empty parenthesis {}
    // this keyword function k andar kaam nhi kar raha
}
// coffee()



// Explicit return
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3, 4))



// jab hum curly braces {} use karen ge to return keyword likhna pare ga lekin jab parnthesis () use karen ge to return keyword nhi likhna pare ga



// Implicit return
// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)
const addtwo = (num1, num2) => ({username: "Talal"})
// We can't return object like this {username: "Talal"}, we have to wrap it in parenthesis () like this ({username: "Talal"})
console.log(addtwo(3, 4))