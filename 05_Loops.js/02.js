// forin returns key by default 

const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in obj) {         // forin works for object but bydefault return keys of object
    // console.log(key)
}

for (const [key, value] in obj) {    // interesting print kara ke dekho
    // console.log(key, value)          // j s c p r b s w 
}

for (const key in obj) {
    // console.log(obj[key])        // to get values of key
}

for (const key in obj) {
    // console.log(key + ': ' + obj[key])   // print key: value pairs
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);           // Nothing is printed (forin not work on map)
}

// Let's check on arrays and string

const arr = [1, 2, 3, 4, 5]

for (const key in arr) {
    // console.log(key)                  // Print Indices
}

const str = "Kunal Gupta"

for (const key in str) {
    // console.log(key)                  // Print Indices
}