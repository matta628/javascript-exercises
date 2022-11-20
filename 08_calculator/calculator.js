const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.length ? array.reduce((acc, num) => acc + num) : 0;
};

const multiply = function(array) {
  return array.length ? array.reduce((acc, num) => acc*num) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n == 0) return 1;
  let total = 1;
  for (let i = 2; i <= n; i++){
    total *= i;
  }
  return total;
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
