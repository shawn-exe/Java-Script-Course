function download(url,callback) {
    setTimeout(() => {
        console.log("Downloading "+url)
        callback(url)
    }, 2000);
}

function process(picture) {
    console.log("processing ",picture)
}

// picture='image'
let url3='http://www.javascript.com/3'
let url1='http://www.javascript.com/1'
let url2='http://www.javascript.com/2'
// download(url,process)
download(url1,function(url){
    console.log("Processing "+url);
    download(url2,function(url){
        console.log("Processing "+url)
        download(url3,function(url){
            console.log("Processing "+url)
        })
    })
})