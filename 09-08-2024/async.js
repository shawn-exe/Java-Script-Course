// async --all things are sync and returns a promise
// await waits for the promise to get resolved
async function f() {
    let promise = new Promise((reslove,rejecct)=>{
        setTimeout(()=>reslove("done"),1000)
    });
    let result=await promise;
    console.log(result)  
}
f();
