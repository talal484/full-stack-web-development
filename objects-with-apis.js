const course = {
    coursename: "Javascript",
    price: "999",
    couseInstructor: "Talal"
}

// console.log(course.couseInstructor)


// sab se pehle hum likhte hain const, phir hum likhte hain curly braces {}, phir equal =, phir kahan se values extract karni hain (course object se), phir curly braces mein likhte hain k konsi values extract karni hain (couseInstructor)

// const {couseInstructor} = course

const {couseInstructor: instructor} = course
// console.log(couseInstructor)
console.log(instructor)


// APIs humen in 2 structures mein milti hain
/* {
     "name": "talal",
     "coursename": "Javascript",
     "price": "999",
}

*/

/* 
    [
        {},
        {},
        {}
    ]
*/