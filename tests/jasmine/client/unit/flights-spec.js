/**
 * Created by gvozdikov on 26.07.2015.
 */
describe("Client unit test", function () {
    it("Today's flights", function () {
        expect(todayFlights().count()).toBe(1);
    });
});
