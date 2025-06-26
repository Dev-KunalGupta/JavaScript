// 'this' keyword used to refers current context.
// In browser refers to window object
// In node environment refers to empty object {}

const user = {
    username: "Kunal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Kunal"
//     console.log(this)                          //can say function object
//     console.log(this.username);                //undefined
// }


// const chai = function () {
//     let username = "hitesh"
//     console.log(this)                             //can say function object
//     console.log(this.username);                   //undefined
// }

// const chai =  () => {
//     let username = "Kunal"
//     console.log(this)                              //empty object {}
//     console.log(this.username);                    //undefined
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2            //implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )         //implicit return can be used when returning a object

const addTwo = (num1, num2) => ({username: "Kunal"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()