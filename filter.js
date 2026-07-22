// const coding = ["js", "py", "cpp", "java", "kotlin"]
// const value = coding.forEach( (item) => {
//     return item
// } )
// console.log(value)
// foreach loop return nothing even we write it or not


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => (num > 4) )
// console.log(newNums)
// return => [ 5, 6, 7, 8, 9, 10 ]

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums)
// return => [ 5, 6, 7, 8, 9, 10 ]





// Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numArr = numbers.map((num) => { return num + 10 })
// // console.log(numArr)

// numbers.forEach((num, index) => {
//     numbers[index] = num + 10
//     // console.log(numbers)
// })
// // console.log(numbers)



// const newArray = numbers.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num >= 40 )
// console.log(newArray)





// Reduce
const numArr = [1, 2, 3]

// const myTotal = numArr.reduce( function(acc, currval) {
//     return acc + currval
// }, 0)

const myTotal = numArr.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal)




const courses = [
    {
        coursename: "js course",
        price: 999
    },
    {
        coursename: "py course",
        price: 1999
    },
    {
        coursename: "cpp course",
        price: 599
    },
    {
        coursename: "java course",
        price: 3999
    },
    {
        coursename: "data science course",
        price: 999
    },
]

const priceToPay = courses.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay)