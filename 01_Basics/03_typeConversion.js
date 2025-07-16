let score = '33abc'

console.log(typeof score)
console.log(score)

const scoreInNumber = Number(score)

console.log(typeof scoreInNumber)
console.log(scoreInNumber)

// '33' => 33
// '33abc' => NaN
// true => 1  false => 0
// null => 0
// undefined => NaN


// '1' == 1        // true   (string '1' is coerced to number 1)
// 0 == false      // true   (false coerces to 0)
// null == undefined // true (special case)


// false == '0'        // true
// '' == 0             // true
// [] == false         // true
// [] == ![]           // true 🤯