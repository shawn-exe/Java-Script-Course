function getusers(callback){
    let users=[]
    setTimeout(()=>{
        callback([
            {username: "john",email:"john@gamil.com"},
            {username: "shawn",email:"shawn@gamil.com"},
        ])
    },1000)
    return users;
}

function findUser(username,callback)
{
   getusers((users)=>{
    const user=users.find((user)=>user.username===username);
    callback(user)
   });
    
}

findUser("shawn",console.log)
