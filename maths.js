// console.log(Math)
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.1))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10) + 1)

const min = 53
const max = 75

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Math.floor(Math.random() * (max - min + 1)) + min

/*
  1. Math.random() generate values between 0 and 1, including 0 which is rare.
     0 ≤ value < 1


  2. min = 53, max = 75 the difference between min and max values is 22 but as clear in (1) Math.random() not include max value '1'. When we multiply Math.random() with 22 it's range becomes:
     0 ≤ value < 22
     it generates values from 0 to 21 but we want 22 numbers so we do this:
     (max - min + 1) it gives (75 - 53 + 1) => 23. Now when we multiply (max - min + 1) with Math.random() and it gives range of 22 values like this:
     0 ≤ value < 23
     it give values between 0 and 23 including decimal values like this
     0.01, 5.36, 18.754 22.99


  3. To generate integer values we take floor values like this:
     Math.floor(Math.random() * (max - min + 1))
     it give values:
     0, 1, 2, 3,......, 22


  4. To get minimum value 53 and maximum value 75 we add "min = 53" with Math.floor(Math.random() * (max - min + 1)) and the range becomes:
     53 ≤ value < 75
*/