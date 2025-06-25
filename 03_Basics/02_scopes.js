//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kunal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()

}

 one()

if (true) {
    const username = "kunal"
    if (username === "kunal") {
        const website = " youtube"
        // console.log(username + website);    
    }
    // console.log(website);                error can't access          
}

// console.log(username);                   error can't access


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){            //normal function -> hoisting work
    return num + 1
}



// addTwo(5)
const addTwo = function(num){     //function expression -> hoisting doesn't work
    return num + 2
}