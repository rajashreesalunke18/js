//scope-->{}
var c=500
//let a=300
if(true){
    let a=20
    const b=30
    var c=700

}
 //console.log(a)   
 //console.log(b)
 console.log(c)

 function one(){
   const user="Raj"
   function two(){
    const website="google"
    console.log(user)
   }
   //console.log(website)..out of scope(error)
   two()
 }
 one()

 if(true){
    const user="Raj"
    if(user==="Raj"){
        const website="youtube"
        console.log(user+website)
    }
 }
 //console.log(website)


 //++++++++++++++++interesting++++++++++
 // we can access function before before declaration 
 //Hoisting is when the JavaScript interpreter moves all variable and function declarations to the top of the current scope
/*var: Declarations are hoisted and initialized with undefined.
let and const: Declarations are hoisted but not initialized, causing a temporal dead zone.
Function Declarations: Fully hoisted, allowing calls before the declaration.
Function Expressions and Arrow Functions: Hoisted like variables, causing errors if called before assignment. */
addone(5)
function addone(num)
{
return num+1 
}

addtwo(5)
const addtwo=function(num){
    return num+2

}
