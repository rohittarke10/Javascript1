// Maps

const myNums = [1,2,3,4,5]

const newNums = myNums.map((num)=> num+10)

console.log(newNums);

// chaining

const newNums = myNum
.map((num) => num * 10) //{10,20,30,..}
.map((num) => num + 1)  //{11,21,31,..}
.filter((num) => num>=40) //>40

console.log(newNums); //final ot--- >40

