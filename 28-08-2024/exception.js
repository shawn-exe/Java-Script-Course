function validateInteger(number)
{
    if (!Number.isInteger(number))
    {
        throw new Error("Invalid number")
    }
    console.log("Number is Valid", number);
}

try{
    validateInteger(22);
    validateInteger(2.23)
}
catch(error)
{
    console.log("Error",error.message)
}