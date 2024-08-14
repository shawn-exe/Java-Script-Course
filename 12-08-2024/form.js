const form=document.getElementById("signup");
const NAME_REQUIRED="Please enter your name"
const EMAIL_REQUIRED="Please enter your email"
const EMAIL_Invalid="Please enter a valid email"

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
    if(input.value.trim()===" ")
    {
        return showError(input,message);
    }
    return showSuccess(input)
}

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let nameValid =hasValue(form.elements["name"],NAME_REQUIRED)
})