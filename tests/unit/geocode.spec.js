
const getGeocode = require('../../geocode')
describe("getGeocode()", () => {
    it("should return true", () => {
const req = {query: {
    address1: 'new ashok nagar',
    address2: 'block b',
    city: 'new delhi',
    state: 'delhi',
    zipcode: '110096'
}}

expect(getGeocode(req)).toBeTruthy();
        //Another way to test a boolean
        //expect(forgotPassword()).toEqual(true);
    });
});