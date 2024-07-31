/*let sayHello=()=>{
    console.log("Welcome to javascript");
}
sayHello();*/
let TripCost=(ticketprice,noofpersons)=>{
    totalcost=ticketprice*noofpersons;
    return totalcost;
}
console.log("Total cost="+TripCost(200,50));

let trip = (place) => console.log("lets go to ",place)
trip("Nitte")