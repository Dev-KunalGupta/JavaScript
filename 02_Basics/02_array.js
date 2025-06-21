const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//console.log(marvel_heros.push(dc_heros))  //return value of push i.e 4
//console.log(marvel_heros)                 new combined array

//console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// console.log(typeof allHeros)

// console.log(marvel_heros.push(...dc_heros))    return 6
// console.log(marvel_heros)                      spread opearator

// const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)  depth infinity
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))      // boolean false
console.log(Array.from("Hitesh"))         // made an array
console.log(Array.from({name: "hitesh"})) // interesting (key ka array banaye ya value ka?)



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // new array from set of elements