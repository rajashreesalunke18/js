const arr1=[0,1,2,3,4,5]
const arr2=["doraemon","shinchan","tom"]
const arr3=new Array(1,2,3,4)
//console.log(arr3[2])

// Array methods

//arr1.push(4)
//arr1.push(5)
//arr1.pop()

//console.log(arr1)
//arr1.unshift(0)
//arr1.shift()
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
