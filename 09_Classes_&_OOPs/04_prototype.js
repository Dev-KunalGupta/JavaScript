// The AIM is to make a our (user-defined) function named true length which should be accessible to all the string so we need to add that function to the prototype.

let myName = "Kunal     ";

String.prototype.trueLength = function(){
    return this.trim().length;
}

console.log(myName.trueLength());

// Now do the same thing for Arrays and Objects.
let myArray = ["thor","ironman", "spiderman"]


let myObject = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.kunali = function(){
    console.log('Kunal is present in all arrays.')
}

Object.prototype.kunal = function(){
    console.log('Kunal is present in all objects.')
}

myArray.kunal();         // can access object wala function also
myArray.kunali();

myObject.getSpiderPower();  // but object can't access array wala function
myObject.kunal();
