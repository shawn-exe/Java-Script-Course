function getTravelDestinationMessage(destination) {
    return new Promise((resolve, reject) => {
        if (destination=="Paris") {
            resolve(`trip to ${destination}`);
        } else {
            reject("Invalid destination");
        }
    });
}

getTravelDestinationMessage("Paris")
    .then(message => console.log(message))
    .catch(error => console.log(error));

getTravelDestinationMessage("Florida")
    .then(message => console.log(message))
    .catch(error => console.log(error));
