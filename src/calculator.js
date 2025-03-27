const calculator = function Calc() {
  function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }
  function divide(x, y) {
    if (y === 0) {
      throw new Error("division by 0");
    }
    return x / y;
  }
  function multiply(x, y) {
    return x * y;
  }
  return { add, subtract, divide, multiply };
};
const calc = calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(2, 6));
console.log(calc.divide(10, 2));

module.exports = calculator;
