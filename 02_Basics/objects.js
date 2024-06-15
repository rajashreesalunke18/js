//object literals
//keys:values

// const mySym=Symbol("key")
// const Jsuser={
//     name:"Rajashree",
//     "full_name":"Rajashree Salunke",
//     age :18,
//     location:"Pune",
//     email:"abc@gmail.com"
//     [mySym]="mykey"
// }
// console.log(Jsuser.email)
// console.log(Jsuser["email"])//more useful
// console.log(Jsuser["full_name"])
// console.log(Jsuser[mySym])

//Jsuser.emaill="xyz@gmail.com"
//Object.freeze(Jsuser)
//console.log(Jsuser)
// Jsuser.greeting=function(){
//     console.log("Hello")
// }
// Jsuser.greeting2=function(){
//     console.log(`hellooo,${this.name}`)
// }
// console.log(Jsuser.greeting())
// console.log(Jsuser.greeting2())




//more about objects
//const user=new Object()//singleton
const user={}//non singleton
user.id="123abc"
user.name="Rajashree"
user.isloggedIn=false


//console.log(user)
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rajashree",
            lastname:"Salunke"
            
        }
    }
}
// console.log(regularuser.fullname)
console.log(regularuser.fullname?.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}.....same problem as array(obj inside obj)
//const obj3=Object.assign({},obj1,obj2,obj4)......(target,source/s)
//console.log(obj3)
const obj3={...obj1,...obj2}
console.log(obj3)
//arrray of objects;
const users=[
{
    id:3,
    email:"abc@gmail.com"

},
{

}
]
users[1].email 
console.log(user)
//some methods
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('isloggedIn'))
//for more methods use google console

