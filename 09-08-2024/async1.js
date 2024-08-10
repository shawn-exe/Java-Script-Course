function getuser(userid){
    return new Promise((resolve,reject)=>{
        console.log("Get the user from the DB");
        setTimeout(()=>
        {
            resolve({userid:userid,
                username:"Shawn"
            })
        },2000)
    })
}

function getservice(user){
    return new Promise((resolve,reject)=>{
        console.log(`get services of ${user.username}`);
        setTimeout(()=>
        {
            resolve(["email","vpn","cdn"])
        },2000)
    })
}

function getservicecost(services){
    return new Promise((resolve,reject)=>{
        console.log(`Calculate service cost of ${services}`);
        setTimeout(()=>
        {
            resolve(services.length*100)
        },2000)
    })
}

async function showservicecost() {
    let user=await getuser(10)
    let services=await getservice(user)
    let cost= await getservicecost(services)
    return new Promise((resolve,reject)=>
    {
        resolve(setTimeout(()=>
        {
            console.log("cost is",cost)
        },1000))
    }) 
}
showservicecost()