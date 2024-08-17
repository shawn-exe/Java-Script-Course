function getdata()
{
    const xhr = new XMLHttpRequest();
    const url = "http://127.0.0.1:5500/14-08-2024/data.json"
    xhr.open("GET",url);
    xhr.onload=()=>
    {
        console.log("Loaded with data");
        console.log(typeof xhr.responseText);
        let dataobj=JSON.parse(xhr.responseText);
        console.log(dataobj)
        for (let key in dataobj)
        {
            let dl = document.createElement('dl');
            let dt = document.createElement('dt');
            dt.innerHTML=`${key}`;
            let dd=document.createElement('dd');
            dd.innerHTML=`${dataobj[key]}`;
            dl.appendChild(dt);
            dl.appendChild(dd);
            document.getElementById("data").appendChild(dl);
        }
    }
    xhr.send();
}