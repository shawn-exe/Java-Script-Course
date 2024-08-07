let p=new Promise((resolve,reject)=>
{
    setTimeout(()=>{resolve(10);},2000)
})

p.then((result)=>{
    console.log(result);
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(result*2);
        },2000)
    })
}).then((result)=>{
    console.log(result);
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(result*3);
        },2000)
    })
}).then((result)=>{
    console.log(result);  
})