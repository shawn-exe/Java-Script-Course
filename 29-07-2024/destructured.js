/*function showDetails([arg1,arg2]){
    console.log(arg1+" "+arg2);
}
showDetails("Sachin","Rahul","Laxman");*/

const empobj={name:"Mark",age:25,country:"india"};

function showEmpdetails({name,country,age}){
    console.log("Name:",name);
    console.log("country: ",country);
    console.log("age",age);
}
showEmpdetails(empobj);