/*
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5")
        break
    }
    console.log(i)
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5")
        continue
    }
    console.log(i)
}
*/



// // While loop
// let heroes = ["flash", "superman", "batman"]
// let i = 0
// while (i < heroes.length) {
//     // console.log(`Hero: ${heroes[i]}`)
//     // i++
// }



// for of loop
let arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val)
}
// print all the numbers



const greeting = "Hello World!"
let i = 1

for (const greet of greeting) {
    // console.log(`${i} character is ${greet}`)
    // i = i + 1
}


// Map
const map = new Map()
map.set("PK", "Pakistan")
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("UK", "United Kingdom")
map.set("UK", "United Kingdom")
// console.log(map)


// Map don't print duplicate key value pair
// Map(4) {
//   'PK' => 'Pakistan',
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'UK' => 'United Kingdom'
// }




for (const key of map) {
    // console.log(key)
}
// [ 'PK', 'Pakistan' ]
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'UK', 'United Kingdom' ]



for (const key in map) {
    // console.log(key)    // this is not working because map is not iterable
}



for (const [key, value] of map) {
    // console.log(key,":", value)
}
// PK : Pakistan
// IN : India
// USA : United States of America
// UK : United Kingdom



// const myObj = {
//     name: "Talal",
//     age: 20
// }

// for (const [key, value] of myObj) {
//     // console.log(key,":", value) // myObj is not iterable
// }




// For in loop
const myLanguages = {
    js: "javascript",
    cpp: "C++",
    py: "python"
}
for (const key in myLanguages) {
    // console.log(key, "is shortcut for", myLanguages[key])
}





const programming = ["js", "py", "cpp", "java", "kotlin"]
for (const key in programming) {
    // console.log(programming[key])
}





// For each loop
const coding = ["js", "py", "cpp", "java", "kotlin"]

// coding.forEach(function (languages){
//     console.log(languages)
// })



// coding.forEach( (languages) => {
//     console.log(languages)
// } )


function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)
// give only reference not execute the function in line number 154


// js
// py
// cpp
// java
// kotlin


coding.forEach( (languages, index, arr) => {
    // console.log(languages, index, arr)
} )

// js 0 [ 'js', 'py', 'cpp', 'java', 'kotlin' ]
// py 1 [ 'js', 'py', 'cpp', 'java', 'kotlin' ]
// cpp 2 [ 'js', 'py', 'cpp', 'java', 'kotlin' ]
// java 3 [ 'js', 'py', 'cpp', 'java', 'kotlin' ]
// kotlin 4 [ 'js', 'py', 'cpp', 'java', 'kotlin' ]



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c plus plus",
        languageFileName: "C++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )
// js
// C++
// py