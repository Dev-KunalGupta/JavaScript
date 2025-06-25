// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Kunal",
    "full name": "Kunal Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "kunal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email = "kunal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kunal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());     // undefined bcoz console.log tries to print the return value of the function but there is no return in the function
console.log(JsUser.greetingTwo());  // same goes for here
JsUser.greeting();                  // directly fuction call that's why no return value
JsUser.greetingTwo();               // same goes for here