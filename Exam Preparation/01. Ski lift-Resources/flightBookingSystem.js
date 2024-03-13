class FlightBookingSystem {

    constructor (agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price) {

        let data = this.flights.find((p)=> p.flightNumber == flightNumber);

        if (data) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        };

        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;

    };

    bookFlight (passengerName, flightNumber) {
        let data = this.flights.find((p)=> p.flightNumber == flightNumber);

        if (!data) {
            return `Flight ${flightNumber} is not available for booking.`
        };

        this.bookings.push({
            passengerName,
            flightNumber,
            price: data.price
        })

        this.bookingsCount += 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    };

    cancelBooking (passengerName, flightNumber) {

        let data = this.bookings.find((p)=> p.passengerName == passengerName && p.flightNumber == flightNumber);

        if (data) {
            this.bookingsCount -= 1;
            this.bookings.splice((this.bookings.indexOf(data)), 1);
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }

        throw new Error (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);

    };

    showBookings (criteria) {

        if (this.bookings.length == 0) {
            throw new Error ('No bookings have been made yet.');
        };

        switch (criteria) {
            case 'all': 
                let resultAll = [`All bookings(${this.bookingsCount}):`];
                for (let {passengerName, flightNumber} of this.bookings){
                    resultAll.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return resultAll.join('\n');
            
            case 'cheap':
               let filtered = this.bookings.filter((p) => p.price <= 100);

               if (!filtered.length) {
                return 'No cheap bookings found.';
               };

                let resultCheap = ['Cheap bookings:'];
                for (let {passengerName, flightNumber} of filtered) {
                    resultCheap.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return resultCheap.join('\n');
            
            case 'expensive':
                let filteredExp = this.bookings.filter((p) => p.price > 100);

               if (!filteredExp.length) {
                return 'No expensive bookings found.';
               };

                let resultExpensive = ['Expensive bookings:'];
                for (let {passengerName, flightNumber} of filteredExp) {
                    resultExpensive.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return resultExpensive.join('\n');

        };

    };

};


const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));




