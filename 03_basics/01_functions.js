// creating functions

function addtwo(n1,n2){
    console.log(n1+n2);
}
addtwo(3,4)

function loginUser(username){
    return `${username} just logged in`
}

console.log(loginUser("rohit")) //rohit just logged in

console.log(loginUser()) //undefined just logged in

// Rest operator 
function calcartprice(...num1){
    return num1;
}
console.log(calcartprice(200,300,400)) // this will return an array [200, 300, 400] 
//without ... only 200 will be printed

//handling objects in func
const user = {
    name: "rohit",
    price:100
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleobject(user)
// i similar way you can handle arrays;

