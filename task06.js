'use strict';

let input;
let total = 0;
do {
  input = +prompt('введите число');
  total += input;
} while (input);
alert(`Общая сумма чисел равна ${total}`);
