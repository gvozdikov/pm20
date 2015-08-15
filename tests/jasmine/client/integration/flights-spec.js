describe("FLight list spec", function () {
  beforeEach(resetTestingEnvironment);
  beforeEach(createFlight);

  it("Today's flights", function () {
    expect(Template.body.__helpers[' todayFlights']().count()).toBe(1);
  });
});
