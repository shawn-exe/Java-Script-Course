let task=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise has been rejected")
    },1000)
})

task.then((data)=>{
    console.log(data)},
    (error)=>{
        console.log("error",error)
    }
)
.finally(()=>{
    console.log("This is finally() block executed")
})