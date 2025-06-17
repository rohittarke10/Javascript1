// reduce

const myNum = [1,2,3,4]

const myTOt = myNum.reduce(function(acc,curval){
    return acc+curval
},0)
console.log(myTOt); 
// initially acc that is accumulator has a value of 0 as given
// then the accumulator takes the value of acc+curval in each iterations
//  acc=0 , currval=1
//  acc=1 ,currval= 2
// acc=3, currval = 3
// 6 final ans

// reduce in ARROW FUNC

const myTOt = myNum.reduce((acc,currval)=> acc+currval,0)

// reduce on object
const shoppingcart = [
    {
        itemname: "js course",
        price: 199
    },
    {
        itemname: "py course",
        price: 199
    },
]

// adding cart using reduce

const pricetopay = shoppingcart.reduce((acc,item)=>acc+ item.price,0)
