function operation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Operation 1 completed");
            resolve();
        }, 1000); 
    });
}

function operation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Operation 2 completed");
            resolve();
        }, 1000);
    });
}

function operation3(result2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Operation 3 completed");
            resolve();
        }, 1000); 
    });
}

async function performOperationsInSequence() {
    await operation1();
    await operation2();
    await operation3();
}
performOperationsInSequence();
