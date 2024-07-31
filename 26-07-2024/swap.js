const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter num1: ', (n1) => {
    rl.question('Enter num 2: ', (n2) => {
        console.log("Before swapping:");
        console.log("a =", n1);
        console.log("b =", n2);

        let temp = n1;
        n1 = n2;
        n2 = temp;

        console.log("After swapping:");
        console.log("a =", n1);
        console.log("b =", n2);

        rl.close();
    });
});
