// for of returns values

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element)
}

const str = "Kunal Gupta"

for (const letter of str) {
    // console.log(letter)
}

const map = new Map()
map.set('IN', 'India')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')
map.set('IN', 'India')             // no duplicate values

// console.log(map)

for (const element of map) {
    // console.log(element)
}

for (const [key, value] of map) {
    // console.log(key, value)
}

const obj = {
    game1 : "BGMI",
    game2 : "FF",
    game3 : "COC"
}

for (const element of obj) {      // forof not work for objects
    // console.log(element)       // TypeError: obj is not iterable
}