function filter(numbers,callback){
    let results=[]
    for(const num of numbers){
        if(callback(num))
        {
            results.push(num)
        }
    }
    return results;
}

let numbers= [1,3,4,5,6,2,7,8,9]
let oddnums=filter(numbers,(number)=>number%2!=0)
console.log(oddnums)