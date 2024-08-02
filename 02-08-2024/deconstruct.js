let carids=[1,2,3]
let [car1,car2,car3]=carids
console.log(car1,"\n",car2,"\n",car3,"\n"
)

let car={id:123,model:2012}
let {id,model}=car
console.log(id)
console.log(model)

let newcar1=car //shallow copy
let newcar=JSON.parse(JSON.stringify(car))//deep copy
console.log(newcar)
newcar.id=233
console.log(car)