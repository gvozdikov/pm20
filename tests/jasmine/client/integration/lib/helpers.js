resetTestingEnvironment = function () {
  Meteor.call('resetTestingEnvironment');
};

createFlight = function () {
  Meteor.call('fixtures/flights/create');
};
