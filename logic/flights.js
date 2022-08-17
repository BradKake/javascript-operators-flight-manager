function Flights() {

    function calculateNumberOfFlights(numPassengers, capacity) {
        let numFlights;

        if (numPassengers < 0) {
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (capacity < 0) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        if (numPassengers % capacity == 0) {
            numFlights = numPassengers / capacity;
        } else {
            numFlights = Math.floor(numPassengers / capacity) + 1;
        }
        return numFlights;
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = 0;
        let distance;

        for (distance of distancesArray) {
            totalDistance += distance;
        }

        if (totalDistance > distanceLimit) {
            throw new Error("The total distance cannot be more than the distance limit");
        }

        if (totalDistance <= (distanceLimit / 2)) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= 3 * distanceLimit / 4) {
            return "The revision needs to be done within the next 2 months";
        } else {
            return "The revision needs to be done within the next month";
        }
    }
    return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();