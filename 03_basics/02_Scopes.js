// var 

if(true) {
    let a=10
    const b=20
    var c=20
}
console.log(a) //gives error as it is outof block scope
console.log(b) //gives error as it is outof block scope
console.log(c) //gives output as 20;
// thus var can create problems

// function chaining
// the child can access the properties of parent but not vice versa

function one(){
    const name= "rohit"
    function two(){
        const n2="xyz"
        console.log(name) //will not give error
    }
    console.log(n2); //gives error

    two()
}
one()