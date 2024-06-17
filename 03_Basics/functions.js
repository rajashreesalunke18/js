function userlogin(username){
    return`${username} just logged in`
}
console.log(userlogin("raj"))


//rest and spread operator
function price(val1,val2,...num1){
 //function price(...num1){
    return num1
 }
 console.log(price(100,200,400))


//  using objects
const user ={
    username:"Raj",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
//or direct pass object
 handleObject({
    username:"sam",
    price: 299
 })
 const arrays=[100,200,300]
 function secondvalue(getArray){
    return getArray[2]
 }
 console.log(secondvalue(arrays))


