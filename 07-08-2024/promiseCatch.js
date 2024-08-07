function getUserById(id)
{
    if(typeof id!=="number" || id<=0)
    {
        throw new Error("Invalid Id argument")
    }
    return new Promise((resolve,reject)=>{
        let auth=false
        if(!auth){
            throw new Error("Unauth Access!!!")
        }
        resolve({
            id:id,
            username:"admin"
        })
    })
}
try{
    getUserById(1)
    .then((user)=>console.log(user.username))
    .catch((error)=>console.log("caugth by catch",error))
}catch(error)
{
console.log("Error:",error)
}