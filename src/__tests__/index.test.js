const { zipcodes } = require("../index");

describe("zipcodes library", () => {
  test("findLocation() should return the correct location for a given zipcode", () => {
    const zipcode = "2000";
    const expectedLocation = "San Fernando";
    expect(zipcodes.findLocation(zipcode)).toBe(expectedLocation);
  });

  test("findLocation() should return null for an invalid zipcode", () => {
    const invalidZipcode = "9999";
    expect(zipcodes.findLocation(invalidZipcode)).toBeNull();
  });

  test("findZipcode() should return the correct zipcode for a given location", () => {
    const location = "Angeles";
    const expectedZipcode = "2009";
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return the correct zipcode for a given location", () => {
    const location = "San Fernando City";
    const expectedZipcode = "2000";
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return null for an invalid location", () => {
    const invalidLocation = "Unknown City";
    expect(zipcodes.findZipcode(invalidLocation)).toBeNull();
  });

  test("findZipcode() should return the correct zipcode for 'City of Manila'", () => {
    const location = "City of Manila";
    const expectedZipcode = "1000"; // Replace with the actual zipcode
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return the correct zipcode for 'Quezon City'", () => {
    const location = "Quezon City";
    const expectedZipcode = "1100"; // Replace with the actual zipcode
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return the correct zipcode for 'City of Makati'", () => {
    const location = "City of Makati";
    const expectedZipcode = "1200"; // Replace with the actual zipcode
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return the correct zipcode for 'Pasig City'", () => {
    const location = "Pasig City";
    const expectedZipcode = "1600"; // Replace with the actual zipcode
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });

  test("findZipcode() should return the correct zipcode for 'City of Davao'", () => {
    const location = "City of Davao";
    const expectedZipcode = "8000"; // Replace with the actual zipcode
    expect(zipcodes.findZipcode(location)).toBe(expectedZipcode);
  });
});
