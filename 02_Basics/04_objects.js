// const tinderUser = new Object()     //using constructor->singleton object
const tinderUser = {}                  //using literal

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "kunal@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kunal",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)   // obj1 mai obj2 bhi aa jaega
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));       return array
// console.log(Object.values(tinderUser));     return array
// console.log(Object.entries(tinderUser));    return array of array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course  //destructuring
// console.log(courseInstructor);

// const {courseInstructor: instructor} = course  //destructuring
// console.log(instructor);

// JSON format -> values from api comes in this format earlier xml(complex)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// sometime we get api's in form of array of objects(also JSON)
[
    {},
    {},
    {}
]
