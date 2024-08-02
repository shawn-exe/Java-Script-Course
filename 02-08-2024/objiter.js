let emp={
    id:123,
    name:"shawn",
    age:20
}
// obj iterator for traversing through contets of the object

// for (let i in emp)
// {
//     console.log(i, ": ",emp[i])
// }

//converting an object into array
//Object.keys()--creates array that containes keys for every value
//Object.vlaues()--creates array that containes values for every key
//Object.entries()--creates array of array 

Object.keys(emp).forEach((key)=>{
    console.log("keyss:",key ," : ",emp[key])
})

Object.values(emp).forEach((values)=>{
    console.log("values:",values)
})

Object.entries(emp).forEach((arr)=>{
    console.log(arr[0],"-----",arr[1])
})

