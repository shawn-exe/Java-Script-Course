//string
let fname='shawn'
let lname="salis"
let res=`The name is ${fname} and ${lname}`
console.log(res)

//numbers
let num=-3/0
let a="abc"/3
console.log(a)
let n1=3/2
console.log(Number.isInteger(n1))
let n2=5.493892
console.log(n2.toFixed(0))

//bigINT
let n3=3923392839028n
console.log(typeof(n3))

//boolean
const data=false
console.log(typeof(data))

//undefined
let res1;
res1=Boolean(undefined)
console.log(res1)

//Symbols
let s1=Symbol("CR7")
console.log(s1)
console.log(typeof(s1))
console.log(s1.description)

//objects
let student={
    fname:"Shawn",
    lname:"salis",
    runs:8920
}
student.lname="Salis"
student.hobby="Cricket"
console.log(student)
console.log(student.runs)
delete student.hobby
console.log(student)




