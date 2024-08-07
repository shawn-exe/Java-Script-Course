//promise binds the (output) asynchronous function

//2)using catch
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

//Catch can excecute only rejected/failed state
promise.then(onfulfilled,onRejected)
promise.catch(onfulfilled,onRejected)
