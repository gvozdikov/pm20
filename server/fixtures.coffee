Meteor.startup ->
  if flights.find().count() is 0
    flights.insert
      flight_number: 'ABC123'
      departure_date_time: '2016-01-01 12:00:00'
