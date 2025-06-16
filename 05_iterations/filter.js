// Fliter 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums =  myNums.filter( (num) => {
    return num>4
})
// note when u use {} in arrow function use return keyword
console.log(newNums);

// another way without {}
const newNums = myNums.filter( (num)=> num>4)


// using for each loop instead of filter
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);


// some practise of filter on array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// to get the books with genre "history"
let userbooks = books.filter( (bk) => bk.genr==='History')

// to get book publish date >=1995 and genre "history"
userbooks = books.filter( (bk) =>{
    bk.publish>=1995 && bk.genre==='history'
})
console.log(userbooks);