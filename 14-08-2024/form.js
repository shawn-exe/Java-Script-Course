const form=document.getElementById("signup");

//these are just the messages..
const NAME_REQUIRED="Please enter your name"
const EMAIL_REQUIRED="Please enter your email"
const EMAIL_Invalid="Please enter a valid email"


function showMessage(input,message,type)
{
    const msg=input.parentNode.querySelector("small")
    msg.innerText=message;
    input.className=type?"sucess":"error";
    return type;
}

function showSuccess(input)
{
    return showMessage(input," ",true);
}

function showError(input, message)
{
    return showMessage(input,message,false);
}

function hasValue(input, message)
{
    const trimmedValue = input.value.trim();
    if(trimmedValue.length < 1)
    {
        return showError(input,message);
    }
    return showSuccess(input)
}

function validateEmail(input,required_message,invalid_message)
{
    if(!hasValue(input,required_message))
    {
        return false;
    }
    const emailRegex=new RegExp("^[a-zA-Z0-9]{3,20}@gmail.com$");
    const email=input.value.trim();
    if(!emailRegex.test(email))
    {
        return showError(input,invalid_message);
    }
    return true;
}



form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let nameValid =hasValue(form.elements["name"],NAME_REQUIRED);
    let emailValid =validateEmail(form.elements["email"],EMAIL_REQUIRED,EMAIL_Invalid)

    if(nameValid && emailValid)
    {
        alert("Demo only");
    }
})