Template.body.helpers({
  allFlights: function () {
    return flights.find();
  },
  todayFlights: function () {
    var now = new Date();
    return flights.find({
      departure_date_time: {
          $gt: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
          $lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
        }
      });
  }
});
