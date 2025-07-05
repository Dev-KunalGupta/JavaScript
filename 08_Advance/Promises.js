// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that operation was completed successfully.
// rejected: meaning that the operation failed.

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("In the promise...")
//     },1000)
//     resolve()                // Not work
// })

// promiseOne.then(function(){
//     console.log("Promise consumed.")
// })

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task one...")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("One consumed.")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two...")
        resolve()
    },1000)
}).then(function(){
    console.log("Two consumed.")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // Getting some data from the database and pass to resolve.
        resolve({username: "Kunal", email: "kunal@google.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);       //If we want to return value then it can't directly return it we need to do chaining.
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Kunal", password: "1234"})
        }else{
            reject('ERROR')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("Either resolved or rejected"))

// Promise without then and catch. Now by using async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Kunal", password: "1234"})
        }else{
            reject('ERROR')
        }
    },1000)
})

// Without try catch error not handled if error false then run properly
// async function promiseFiveResolver() {
//     const response = await promiseFive
//     console.log(response)
// }
// promiseFiveResolver()

// Use try catch to handle error gracefully

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

//Now will use fetch -> gives promise no need to handle -> can be done by both methods.

// By async await

// async function getAllUsers() {
    
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(typeof response)
//         const data = await response.json()
//         console.log(data)
// }

// getAllUsers()

// async function getAllUsers() {
//     try{const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(typeof response)                   // Object
//         const data = await response.json()
//         console.log(data)}
//     catch(error){
//         console.log(error)
//     }
// }

// getAllUsers()


// By .then .catch

fetch('https://api.github.com/users/hiteshchoudhary').then(function(data){
    console.log(typeof data)                   // Object
    return data.json()
}).then(function(data){
    console.log(typeof data)                   // Object as JSON is similar to obj.
    console.log(data)
}).catch(error => console.log(error))
