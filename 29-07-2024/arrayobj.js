a=[123,'Nishanth','xyz']

a.forEach(element => {
    console.log(element)
});

f=a.find((ele) =>{
    return ele=="Nishanth"
})
console.log(f)

arr=a.filter((f)=>{
    return typeof f=="string"
})
console.log(arr)