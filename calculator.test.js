const calculator = require("./calculator");
const calc = calculator();

test.skip("adds 1 + 2 to equal 3", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test.skip("subtract 1 - 2 to equal -1", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});

test.skip("divide 10 / 2 to equal 5", () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test.skip("multiply 2 * 6 to equal 12", () => {
  expect(calc.multiply(2, 6)).toBe(12);
});

test.skip("divide by 0 throws an error", () => {
  expect(() => calc.divide(10, 0)).toThrow("division by 0");
});
