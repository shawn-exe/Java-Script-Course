let date= new Date()
const days={
    0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"
}
let day=date.getDay()
console.log("Today is:",days[day])
let hr=date.getHours();
if(hr>12){
    hr=(hr-12)+" PM"
}
else
{
    hr=hr+" AM"
}
console.log("Current time is:",hr+" :"+date.getMinutes()+" :"+date.getSeconds())
