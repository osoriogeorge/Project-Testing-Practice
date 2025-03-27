const capitalize = require("../src/capitalize.js");

test.skip("first letter of the string capitalize", () => {
  expect(capitalize("jorge")).toBe("Jorge");
});
