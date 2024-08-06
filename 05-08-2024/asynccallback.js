//Async callback gets excuted after the execution of higher order function
function download(url,callback){
    setTimeout(()=>{console.log(`downloading ${url}...`);
    callback(url),1000})
    
}
function process(picture){
    console.log(`processing ${picture}`)
}
let url='http:www.javascript.com'
let picture=''
//download(url,process)
//process(picture)

//if we use function inside download call:
download(url, function(picture){
    console.log(`processing ${picture}`)
})