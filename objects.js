// Singleton
// Object.create


// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Talal",
    mySym: "mykey1",
    [mySym]: "mykey1",
    "full name": "Muhammad Talal",
    age: 20,
    location: "Lahore",
    email: "talal@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // return => talal@gmail.com
// console.log(JsUser["email"])    // return => talal@gmail.com
// console.log(JsUser["full name"])    // return => Muhammad Talal
// console.log(JsUser.mySym)   // return => mykey1
// console.log(typeof JsUser.mySym)    // string
// console.log(JsUser[mySym])  // return => mykey1
// console.log(typeof JsUser[mySym])   // string


// JsUser.email = "talal@google.com"
// console.log(JsUser)


// Object.freeze(JsUser)
// JsUser.email = "talal@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user!!")
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user!!, ${this.name}`)
}

// console.log(JsUser.greeting)    // [Function (anonymous)]
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())