//const --- reassignement and re declared is not possible
const a='hello'
const _a="hello1"
const A="Js"
console.log(a+ " "+A)

//var --- can be reassigned and re declared
var a1="shawn"
a1=2
console.log(a1)

//let --- cannot re declare but can be re assigned
let name="shawn"
let age=13
{
    age=28
    console.log(age)
}
console.log(age)

