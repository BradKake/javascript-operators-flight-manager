function Flights() {
    function calculateNumberOfFlights(numPassengers, capacity) {
        let numFlights;

        if (numPassengers < 0) {
            throw Error ("The number of passengers must be a positive integer value");
        }
        if (capacity < 0) {
            throw Error ("The capacity of the flight must be a positive integer value");
        }

        if (numPassengers % capacity === 0) {
            numFlights = numPassengers / capacity;
        } else {
            numFlights = Math.floor(numPassengers/capacity) + 1;
        }
        return numFlights;
    }
    return {calculateNumberOfFlights};
}

module.exports = Flights();