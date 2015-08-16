Meteor.startup ->
  if Flights.find().count() is 0
    Flights.insert
      flight_number: 'ABC123'
      departure_date_time: new Date()
