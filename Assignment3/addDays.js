function addDaysToDate(dateString, n) {
    let dateParts = dateString.split(' ');
    let day = parseInt(dateParts[0]);
    let month = dateParts[1];
    let year =dateParts[2];

    const monthMap = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,"Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    
    let date = new Date(year, monthMap[month], day);
    date.setDate(date.getDate() + n);
    let newMonth=Object.keys(monthMap).find(key =>monthMap[key]==date.getMonth())
    let newDate = date.getDate()+" "+newMonth+" "+date.getFullYear();
    return newDate;
}

let d = "16 Jul 2018";
let n = 30;
let resultDate = addDaysToDate(d, n);
console.log(resultDate); 
