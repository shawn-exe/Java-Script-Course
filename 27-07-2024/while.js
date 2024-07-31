const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter num: ', (n1) => {
    let sum=0
    let i=0;
    while(i<=n1)
    {
        sum+=i
        i++;
    }
    console.log("sum is:",sum)
        rl.close();
});
