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

function printKeys(item){
    console.log(item)
}

// coding.forEach(printKeys)


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