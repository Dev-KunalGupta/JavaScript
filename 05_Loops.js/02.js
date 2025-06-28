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