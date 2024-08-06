function checkDate(date)
{
    const datePattern = /^(\d{2})-(0[1-9]|1[0-2])-(\d{4})$/;
    if(datePattern.test(date))
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(checkDate("11-09-2023"))
