// let p1=new RegExp(pattern,modifiers)
// let p2 = /pattern/modifiers;

let email= new RegExp("(?=.@*)(?=.+.com)");
let emailstr = prompt()

if(email.test(emailstr))
{
    alert("Email is invalid")
}
else
{
    alert("Emial is valid")
}