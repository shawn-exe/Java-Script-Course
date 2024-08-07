const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("First Promise has been Resolved");
        reject(10);
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Second Promise has been Resolved");
        resolve(20);
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third Promise has been Resolved");
        resolve(30);
    },1000)
})

Promise.race([p1,p2,p3]).then((value)=>console.log(`${value}`))
.catch((reason)=>
    console.log(`Rejected:${reason}`)
)