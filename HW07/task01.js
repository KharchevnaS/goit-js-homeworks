'use strict';

const liList = document.querySelectorAll('.item');
console.log(`В списке ${liList.length} категории`);

Array.from(liList).forEach((li) => {
    const h2 = li.querySelector('h2');
    const liInsiders = li.querySelectorAll('li');
    console.log(`Категория ${h2.textContent}. Количество элементов: ${liInsiders.length}`);

})