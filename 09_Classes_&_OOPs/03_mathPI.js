// console.log(Math.PI);
// Math.PI = 4;                 // Not change obviously
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);     // The reason is here

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {enumerable: false})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') 
    console.log(key + ':' + value) // Name will not be printed(enumerable:false)
}