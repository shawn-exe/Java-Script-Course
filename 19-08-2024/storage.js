function save()
{
    console.log("save")
    let userString=document.getElementById("mydata").value
    localStorage.setItem("data",userString)
}

function clear()
{
    localStorage.removeItem("data")

}

function display()
{
    // let dataString =sessionStorage.getItem("data")
    // console.log(dataString)
    let dataString1=localStorage.getItem("data")
    document.getElementById("data").innerHTML=`<li>${dataString1}</li>`

}
