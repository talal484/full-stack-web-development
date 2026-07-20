// console.log(Date())

let myDate = new Date()

// console.log(typeof myDate)  // it is object

// console.log(myDate)  // return => 2026-07-14T09:20:20.738Z

// console.log(myDate.toString())  // return => Tue Jul 14 2026 14:19:53 GMT+0500 (Pakistan Standard Time)

// console.log(myDate.toDateString())  // return => Tue Jul 14 2026

// console.log(myDate.toISOString())   // return => 2026-07-14T09:20:54.871Z

// console.log(myDate.toJSON())     // return => 2026-07-14T09:21:36.721Z

// console.log(myDate.toLocaleDateString())    // return => 7/14/2026

// console.log(myDate.toLocaleString())    // return => 7/14/2026, 2:22:52 PM

// console.log(myDate.toLocaleTimeString())    // return => 2:23:24 PM

// console.log(myDate.toTimeString())      // return => 14:24:05 GMT+0500 (Pakistan Standard Time)


// let myCreatedDate1 = new Date(2023, 9, 7)
// console.log(myCreatedDate1.toDateString())   // return => Sat Oct 07 2023


// let myCreatedDate2 = new Date(2023, 9, 7, 5, 3)
// console.log(myCreatedDate2.toLocaleString())   // return => 10/7/2023, 5:03:00 AM

// let myCreatedDate3 = new Date("2026-02-28")     // For YY-MM-DD and MM-YY-DD, months start with 1 otherwise 0 as we do in upper example
// console.log(myCreatedDate3.toDateString())  // return => Sat Feb 28 2026


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)    // return => 1784021889007
// console.log(myCreatedDate3.getTime())   // rteurn => 1772236800000
// console.log(Math.floor(myTimeStamp/1000))   // give result in seconds => 1784022212



// console.log(myDate.toLocaleString('default', {
//     weekday: "long"
// }))      // return => Tuesday