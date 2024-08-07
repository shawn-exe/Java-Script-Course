const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("First Promise has been rejected");
        resolve(10);
    },1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Second Promise has been rejected");
        resolve(20);
    },1000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third Promise has been rejected");
        resolve(30);
    },1000)
})

Promise.all([p1,p2,p3]).then((results)=>{
    const total=results.reduce((p,c)=>p+c);
    console.log("Results",results);
    console.log("total",total);
})