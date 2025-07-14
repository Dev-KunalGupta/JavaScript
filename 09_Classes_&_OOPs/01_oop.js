const user = {          //  Object literal
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

// new -> 1 object se multiple instance bana sakte isiliye new lagate.
// Let's take a constructor function...

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this               // Optional
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)

// console.log(userOne)       // userTwo values get overwrite 
// This is why we need to use new keyword

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);        // Gives a function -> User
// Means constructor have reference to our constructor function.

/*   When we use new keyword...
(i)      Empty object is created called instance -> new object created.
(ii)     A constructor function is called bcoz of new keyword.
(iii)    All the values and arguments are injected in new object.
(iv)     And we get our newly created object.
*/

jhfghhrygg