//promise can be executed using then,catch,finally
//onfullfilled -> resolved  onRejected -> Reject
//promise.then(onfulfilled,onRejected)

// const promise=new Promise((resolve,reject)=>{
//         if(success){
//             resolve(value)
//         }
//         else{
//             reject(value)
//         }
// })

let success=false
function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
                resolve([
                    {username: "john",email:"john@gamil.com"},
                    {username: "shawn",email:"shawn@gamil.com"},
                ])
            }
            else{
                reject("Failed to fetch the user")
            } 
        },1000)       
        });
}

function onfulfilled(users)
{
    console.log(users)
}
function onRejected(error)
{
    console.log(error)
}

const promise=getUsers();
promise.then(onfulfilled,onRejected)