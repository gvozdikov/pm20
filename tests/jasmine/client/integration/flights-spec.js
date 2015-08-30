describe("Flight list spec", function () {
  console.log('Reset test environment!')
  beforeEach(resetTestingEnvironment);
  beforeEach(createFlight);

  it("Today's flights", function () {
    expect(FlightService.getTodayFlights().count()).toBe(1);
  });
});
