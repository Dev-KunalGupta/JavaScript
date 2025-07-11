// The AIM is to make a our (user-defined) function named true length which should be accessible to all the string so we need to add that function to the prototype.

let myName = "Kunal     ";


String.prototype.trueLength = function(){
    return this.trim().length;
}

console.log(myName.trueLength());
