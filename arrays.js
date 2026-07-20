// Arrays in javascript make shallow copies, means properties share to the same reference point

const myArray = [0, 1, 2, 3, 4]
// console.log(myArray)

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray2)
// myArray2.push(6)
// myArray2.push(7)
// myArray2.pop()
// myArray2.unshift(9)     // [ 9, 1, 2, 3, 4 ], 9 comes at start of array
// myArray2.shift()    // // [ 9, 1, 2, 3, 4 ], 9 remove from  start of array
// console.log(myArray2)

// console.log(myArray2.includes(3))
// console.log(myArray2.indexOf(9))

const newArray = myArray.join() // Join bind the array and the convert the datatype into string
// console.log(myArray)
// console.log(typeof myArray)
// console.log(newArray)
// console.log(typeof newArray)




// Slice and Splice
console.log("A", myArray)

const mynarr = myArray.slice(1, 3)

console.log(mynarr)
console.log("B", myArray)

const mynarr2 = myArray.splice(1, 3)
console.log(mynarr2)
console.log("C", myArray)
