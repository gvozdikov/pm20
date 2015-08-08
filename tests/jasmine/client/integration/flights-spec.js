describe("Client unit test", function () {
    it("Today's flights", function () {
        expect(Template.body.__helpers[' todayFlights']().count()).toBe(1);
    });
});
