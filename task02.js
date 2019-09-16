'use strict';

const total = 100;
const ordered = 130;
const orderedAmount = total > ordered;
if (orderedAmount) {
    alert('Заказ оформлен, с вами свяжется менеджер');
} else {
    alert('На складе недостаточно товаров!');
};