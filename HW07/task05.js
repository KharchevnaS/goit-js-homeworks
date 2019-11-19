'use strict';

const input = document.querySelector('#name-input')
const output = document.querySelector("#name-output");
const textDefault = output.textContent;
console.log(output);
const getInputName = (event) => {
    const inputValue = event.target.value;
    output.textContent = !inputValue ? textDefault : inputValue;
};
input.addEventListener('input', getInputName);