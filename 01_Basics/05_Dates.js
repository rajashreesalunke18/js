//Date is object
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.getTimezoneOffset())
console.log(typeof myDate)

let myCreateDate=new Date(2023,0,23)
//let myCreateDate=new Date("01-14-2024")

console.log(myCreateDate.toString())

let myTimeStamp=Date.now()//gives millisecond value
console.log(myTimeStamp)
console.log(myCreateDate.getTime())  ///ctrl+space
console.log(Math.floor(Date.now()/1000))//seconds 

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long",
})
