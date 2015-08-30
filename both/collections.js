Flights = new Mongo.Collection('flights');

var now;
now = new Date;

FlightService = {
    getAllFlights: function() {
        return Flights.find({});
    },
    getTodayFlights: function() {
        return Flights.find({
            departure_date_time: {
                $gt: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                $lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
            }
        });
    }
};
