function greet(choice)
{
    let msg=choice();
    console.log(msg)
}

let message = function(){return "hello world"}
greet(message)