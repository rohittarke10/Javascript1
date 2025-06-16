// this keyword--- current context ko refer karta hai
const user = {
    name: "rohit",
    price: 199,
    welcome: function(){
        console.log(`${this.name},welcome`)
    }

}
user.welcome;

console.log(this) // prints {}
// in browser the global object is the window object 

// Arrow fun
const addTwo = (num1, num2) =>{
    return num1 + num2;
}
console.log(addTwo(3,4))

// another waay
const addTwo = (num1,num2) => (num1 + num2)
// if we use () no use of return 
// if we use {} use return keyword

// returnig object using arrow func
const add = () => ({username:"roh"})


