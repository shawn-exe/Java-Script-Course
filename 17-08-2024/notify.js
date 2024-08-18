const notifyobj={
    body:"you hav a new email",
    image:"./icon.png",
    icon:"./image.jpeg"
}

function notifyme()
{
    alert("About to Notify.....")

    // Notification.requestPermission().then((data)=>
    // {
    //     console.log(data)
    // })

    Notification.requestPermission().then((userPermission)=>
        {
            console.log(userPermission)
            if (userPermission==="default")
            {
                alert("Please Provide Permission");
            }
            else
            {
                new Notification("New Email",notifyobj)
            }
        })
}