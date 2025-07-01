// forEach is a higher order function which takes a callback function as parameter -> callback function is passed as an argument to another function & executed at a later, typically after some operation or event has completed. 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function name() {
    // console.log("Kunal")
})

coding.forEach(function (item) {
    // console.log(item)
})

coding.forEach( (item) => {
    // console.log(item)
})

coding.forEach( item => {
    // console.log(item)
})

// coding.forEach(printKeys)        // Hoisting works
function printKeys(item){
    console.log(item)
}

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item, index, json)=>{
    // console.log(item, index, json)
})

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )


const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);         // foreach returns nothing(undefined)