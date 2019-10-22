"use strict";

let countTotalSalary = function (salary) {
  let total = 0;
  const sumOfSalaries = Object.values(salary);
  for (const value of sumOfSalaries) {
    total += value;
  }
  return total;
}

console.log(countTotalSalary({}));
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);