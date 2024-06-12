const arr1=[0,1,2,3,4,5]
const arr2=["doraemon","shinchan","tom"]
const arr3=new Array(1,2,3,4)
//console.log(arr3[2])

// Array methods

//arr1.push(4)
//arr1.push(5)
//arr1.pop()

//console.log(arr1)
//arr1.unshift(0)  //works like push()
//arr1.shift()     //works like pop()
//console.log(arr1)


console.log(arr1.includes(6));
const newArr=arr1.join()
console.log(newArr)

//slice and splice(changes array)

console.log("A",arr1)//original
const myn1=arr1.slice(1,3)
console.log(myn1)
console.log("B",arr1)//original
const myn2=arr1.splice(1,3)
console.log(myn2)
console.log("C",arr1)//original

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)


//const heros=marvel_heros.concat(dc_heros)
//console.log(heros)
 
//spread operator
// const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("rajashree"))
console.log(Array.from("Rajashree"))
console.log(Array.from(({name:"Rajashree"})))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))