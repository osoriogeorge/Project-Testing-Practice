const reverseString = require("../src/reverseString");

test.skip("String reversed", () => {
  expect(reverseString("jorge")).toBe("egroj");
});
