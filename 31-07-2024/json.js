let data1 = '{"firstname":"shawn123","lastname":"salis123"}'
let obj=JSON.parse(data1)
console.log(obj)

let data2 = {firstname:"shawn",lastname:"salis"}
console.log(data2)
console.log(typeof(data2))
let obj2=JSON.stringify(data2)
console.log(obj2)


