// Primitive data types => Stack
// Non-primitive (Reference) data types => Heap

/* 
1. Primitive data types
   1. string
   2. number
   3. boolean
   4. null (means empty not 0)
   5. undefined (declared variable but not assign value)
   6. symbol (make unique identity)
   7. bigint

2. Non-primitive (Reference) data types
   1. Array ( [ ] )
   2. Object ( { } )
   3. Function ( function( ){ } )

*/


let myName = "Talal"
console.log(myName)    // console.log(myName) => Talal

let anotherName = myName
anotherName = "Ali"
console.log(anotherName)    // console.log(anotherName) => Ali


let student1 = {
    name: "rafay",
    email: "rafay@gmail.com"
}

let student2 = student1
student2.email = "talal@gmail.com"

console.log(student1.email)
console.log(student2.email)
// console.log(student1.email) => talal@gmail.com
// console.log(student2.email) => talal@gmail.com