// Objects Using Consturctors

// creating a object
// const tinderUser = new Object() // this is a singleton object
// another way 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "xyz"
console.log(tinderUser);

const regularUser = {
    email: "rohit@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Rohit",
            lastname: "Tarke"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// Combining of two or more objects
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    1:"a",
    2:"b"
}
const obj3 = Object.assign({},obj1,obj2) //{} is optional
// combining using the spread operator
const obj3 = {...obj1,...obj2}
console.log(obj3);

// to get all the keys or values of the object
 console.log(Object.keys(tinderUser));
 console.log(Objects.values(tinderUser));
//  both of these return an array of keys and values so you can then further use array properties on them

// to check if an object has a certain prop or not
console.log(tinderUser.hasOwnProperty("isLogged")) // will give true or false

//  Object destructure and Json APi
const course = {
    name: "js",
    price: "88"
}

// course.name will give the name of the course

// another way
const {name}=course
console.log(name); //this will also give the name of the  course

// 