// const tinderUser = new Object() // {}, this is singleton object
const tinderUser = {}   // {}, this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Talal"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "talal@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname: "Talal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }


// const obj3 = {obj1, obj2}
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// const obj3 = Object.assign({}, obj1, obj2)  // (target, source)
// copy all the values of source to the target
// return => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// Spread Operator
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)   // return => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },

    {
        id: 2,
        email: "a@gmail.com"
    },

    {
        id: 3,
        email: "l@gmail.com"
    },
]
// console.log(users[2].email)


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// it returns the array of keys in this way => [ 'id', 'name', 'isLoggedIn' ], and we can apply loops or more properties of array


// console.log(Object.values(tinderUser));
// it returns the array of values in this way => [ '123abc', 'Talal', false ], and we can apply loops or more properties of array


// console.log(Object.entries(tinderUser));
// is mein humen array k andar array milta hai jese k => [ [ 'id', '123abc' ], [ 'name', 'Talal' ], [ 'isLoggedIn', false ] ]



console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // return => true
console.log(tinderUser.hasOwnProperty('isLogged'))    // return => false