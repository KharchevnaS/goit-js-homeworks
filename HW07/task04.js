'use strict';
const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector('#value');

let currentValue = Number(span.textContent);

const updateValue = (value) => {
  currentValue = currentValue + value;
  span.textContent = currentValue;
};

buttonIncr.addEventListener('click', () => {
  updateValue(1);
});

buttonDecr.addEventListener('click', () => {
  updateValue(-1);
});