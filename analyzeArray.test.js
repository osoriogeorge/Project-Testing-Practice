const analyzeArray = require("./analyzeArray");

test("Calcula el promedio, máximo y mínimo de un array", () => {
  const numbers = [10, 20, 30, 40, 50];
  const result = analyzeArray();

  expect(result.calculateAverage(numbers)).toBe(30);
  expect(result.calculateMax(numbers)).toBe(50);
  expect(result.calculateMin(numbers)).toBe(10);
});
