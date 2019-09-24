'use strict';


let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt("Введите число", " "));
    numbers.push(userInput);
}
while (userInput !== 0);

for (let number of numbers) {
    total += number;
}
if (numbers.length >= 1) {
    alert(`Общая сумма чисел равна ${total}`);
} else {
    userInput;
}