function mul(num1,num2=8)
{
    if(num2==undefined)
    {
        return num1
    }
    else{
        return num1*num2
    }
}
console.log(mul(2))