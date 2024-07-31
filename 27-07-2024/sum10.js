const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter num: ', (n1) => {
    let sum=0
    for(let i=0;i<=n1;i++)
    {
        sum+=i
    }
    console.log("sum is:",sum)
        rl.close();
});
