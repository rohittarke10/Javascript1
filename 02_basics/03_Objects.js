// two ways to declare objects 
// 1) Literals 2) Constructors
// Constructor se hamesha singleton banta hai

// 1)Literals

const JsUser = {
    name: "Rohit",
    email: "rohit@gpt.com",
    [mySym]: "mykey1",
    age: 18,
    isLoggedin: false,
    lastLoginDays: ["monday","Saturday"]
}

// Ways to access the object 

console.log(JsUser.email)
console.log(JsUser["email"]) // "email" beacuse it is taken as a string by the compiler


// Symbol (Adding Symbol in the key of an object)
const mySym = Symbol("key1") //see line no 10


// to change the values of the object
JsUser.email = "rohit@google.com"

// to lock the object
Object.freeze(JsUser)

// Adding function
JsUser.greeting = function(){
    console.log("Hello!!")
}

console.log(JsUser.greeting) // function(anonymus)
console.log(JsUser.greeting()) // Hello!!

JsUser.greetingtwo = function(){
    console.log(`hello user ${this.name}`)
}

console.log(JsUser.greetingtwo())

