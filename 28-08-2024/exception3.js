function validateArray(arr)
{
    if (arr.length==0)
    {
        throw new Error("Empty array")
    }
        console.log("Array is valid")
}

try
{
    validateArray([1,7]);
    validateArray([]);
}catch(error)
{
    console.log("Error",error.message)

}