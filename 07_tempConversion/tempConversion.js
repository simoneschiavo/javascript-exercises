// rounding to 1 decimal place: Math.round(num * 10) / 10

// from fahrenheit to celsius: (x - 32) * 5/9

const convertToCelsius = function (fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  return Math.round(celsiusTemp * 10) / 10;
};

// from celsius to fahrenheit: (x * 9/5 + 32)

const convertToFahrenheit = function (celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp * 9 / 5 + 32);
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
