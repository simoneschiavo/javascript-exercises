const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(...args) {
  return args.flat().reduce((total, current) => total + current, 0);
};

const multiply = function(...args) {
  return args.flat().reduce((total, current) => total * current, 1);
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
