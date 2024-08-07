//calling the promise more than once is called promise chaining

let p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})

p.then((result)=>{
    console.log(result)
    return result*2
}).then((result)=>{
    console.log(result)
    return result*3
}).then((result)=>{
    console.log(result)
});