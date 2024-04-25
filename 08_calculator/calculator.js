const add = function(...args) {
  let sum = 0;
  const allArgsArr = args.flat();
  allArgsArr.forEach(arg => sum += arg);
  return sum;
};

const subtract = function(...args) {
  const allArgsArr = args.flat();
  let subtraction = allArgsArr[0];
  for (let i = 1; i < allArgsArr.length; i++) {
    subtraction -= allArgsArr[i];
  };
  return subtraction;
};

const sum = function(...args) {
	let sum = 0;
  const allArgsArr = args.flat();
  allArgsArr.forEach((arg) => (sum += arg));
  return sum;
};

const multiply = function(...args) {
  let multiplication = 1;
  const allArgsArr = args.flat();
  allArgsArr.forEach((arg) => (multiplication *= arg));
  return multiplication;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let factor = 1;
  if (num === 0) {
    return factor;
  };
  for (let i = num; i > 0; i--) {
    factor *= i;
  };
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
