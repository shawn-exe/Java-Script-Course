// let c=['red','blue','green','yellow']
// let c1=['magneta','pink']
//  let rgb=[...c]
// // console.log(rgb)

// let merge=[...c,...c1,...rgb]
// console.log(merge)

const circle = {
    radius : 10
};

const coloredCircle={
    ...circle, //cloning
    color:'black'
};

console.log(coloredCircle)
