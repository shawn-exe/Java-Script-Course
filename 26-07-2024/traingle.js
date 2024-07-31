const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter height: ', (h) => {
    rl.question('Enter base: ', (b) => {
        console.log(0.5*b*h)

        rl.close();
    });
});
