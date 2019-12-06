'use strict';

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.body;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function toChangeColor() {
  const someColor = colors[randomIntegerFromInterval(colors.length, 0)];
  console.log(someColor);
  document.body.style.backgroundColor = someColor;
};
let interval = undefined;
btnStart.addEventListener('click', event => interval = interval ? interval : setInterval(() => toChangeColor(), 1000));

btnStop.addEventListener('click', event => clearInterval(interval));