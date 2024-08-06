//It is a fun thats passed as an argument to another fun.
// The other function is called higher oreder function

//1
function createQuote(quote,callback)
{
    var mq="Like i always say,"+quote;
    callback(mq)
}

function logQ(quote)
{
    console.log(quote)
}

//createQuote("eat you veggies",logQ);

//2
function req(query,callback)
{
    setTimeout(()=>
    {
        var res=query+"full"
        callback(res)
    },5000)
}
function getResults(res)
{
    console.log("Response from the server:",res)
}
//req("the glass is half",getResults)


//3
function filter(numbers,fn){
    let results=[]
    for(const num of numbers){
        if(fn(num))
        {
            results.push(num)
        }
    }
    return results;
}
function isodd(number){
    return number%2!=0
}
function iseven(number){
    return number%2==0
}
let numbers= [1,3,4,5,6,2,7,8,9]
console.log(filter(numbers,isodd)) 
console.log(filter(numbers,iseven)) 