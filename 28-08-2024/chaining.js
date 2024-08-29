function bookFlight(flight) {
    return new Promise((resolve, reject) => {
        if (flight === "AirIndia") {
            setTimeout(() => {
                console.log("flight booked successfully.");
                resolve();
            }, 1000);
        } else {
            setTimeout(() => {
                console.log(" booking failed.");
                reject();
            }, 1000);
        }
    });
}

function bookHotel(hotel) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" hotel booked successfully.");
            resolve();
        }, 1000);
    });
}

function main(flight, hotel) {
    bookFlight(flight)
        .then(result => {
            return bookHotel(hotel);
        })
        .catch(error => {
            console.error(error); 
        });
}

main("AirIndia", "Taj");
