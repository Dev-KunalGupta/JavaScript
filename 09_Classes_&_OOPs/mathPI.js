// console.log(Math.PI);
// Math.PI = 4;              // Not change obviously
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);