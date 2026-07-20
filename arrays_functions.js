const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batrman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batrman' ] ]


// console.log(marvel_heroes[3][1])    // return => flash



// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes)
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batrman' ]



// Spread Operator
// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)
// This also work same as concat() function




// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array =  another_array.flat(Infinity)
//We have to give depth here with flat() function
// console.log(real_another_array)
// Output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]




// console.log(Array.isArray("Talal")) // return => false


// console.log(Array.from("Talal"))
// Output: [ 'T', 'a', 'l', 'a', 'l' ]


// console.log(Array.from({name: "Talal"}))    // return empty array => []


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))
// Make array for all the values => [ 100, 200, 300 ]