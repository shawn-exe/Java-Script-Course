const circle={
    radius:20,
    style:{
        color:"blue"
    }
};

//shallow copy:--contents can be duplicated
const clonedCircle={
    ...circle
}
console.log(clonedCircle)

clonedCircle.radius=299

console.log(clonedCircle)

console.log(circle)
//nested objects are just referenced.. not duplicated


//deep copy: nested objects and arrays cannot be duplicated
const og={
    name: "shawn",
    address:{
        city:'nitte',
        zip:12345
    }
}

const shallowCopy={...og};
shallowCopy.address.city='mangalore'
console.log(og.address.city)

const deepCopy=JSON.parse(JSON.stringify(og))
deepCopy.address.city="karkala"
console.log(og.address.city)
console.log(deepCopy.address.city)