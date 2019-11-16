'use strict';

const bodyclick = document.body.addEventListener('click', (e) => {
  console.log(e.target)
});

const inputFontSize = document.querySelector('#font-size-control');
const span = document.getElementById('text');
console.log(span.innerText);
const onValueChanged = (event) => {
  span.style.fontSize = Number(event.currentTarget.value) + "px";
  console.log(event.target)
}
inputFontSize.addEventListener('input', onValueChanged);