function Flights() {
    return function calculateNumberOfFlights(numPassengers, capacity) {
        if (numPassengers % capacity == 0) {
            let numFlights = numPassengers / capacity;
        } else {
            numFlights = numPassengers / capacity + 1;
            return {calculateNumberOfFlights};
        }
    }
}

module.exports = Flights();

