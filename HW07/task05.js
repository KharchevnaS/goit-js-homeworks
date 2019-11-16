'use strict';

const input = document.querySelector('#name-input')
const value = input.value;
console.log(value);
const output = document.querySelector("#name-output");
console.log(output);
const getInputName = () => {
    if (value === null) return output.innerHTML;
    output.innerHTML = value;
}
input.addEventListener('keydown', getInputName);