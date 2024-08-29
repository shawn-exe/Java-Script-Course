function val(num1,num2)
{
    if (num2==0)
    {
        throw new Error("Number is 0")
    }
    else
    {
        console.log("numbers are valid")
    }
}

try
{
    val(1,7);
    val(2,0);
}
catch(error)
{
    console.log("Error",error.message)

}