"use strict";

// let message;
// const china = "КИТАЙ";
// const chili = "ЧИЛИ";
// const australia = "АВСТРАЛИЯ";
// const india = "ИНДИЯ";
// const jamayka = "ЯМАЙКА";
// const chinaPrice = 100;
// const chiliPrice = 250;
// const australiaPrice = 170;
// const indiaPrice = 80;
// const jamaykaPrice = 120;
// let promptChoice = `Введите страну доставки: ${china}, ${chili}, ${australia}, ${india}, ${jamayka}.`;
// let country = prompt(promptChoice);
// let upperCaseCountry = country.toUpperCase();

// switch (upperCaseCountry) {
//     case china:
//         message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
//         break;
//     case chili:
//         message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
//         break;
//     case australia:
//         message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
//         break;
//     case india:
//         message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
//         break;
//     case jamayka:
//         message = `Доставка в ${jamayka} будет стоить ${jamaykaPrice} кредитов`;
//         break;
//     default:
//         message = 'В вашей стране доставка не доступна';
// }
// alert(message);
// Повтор строки
// message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;

// нарушает принцип DRY

// Вот пример решения этой задачи без скучного и опасного ошибками повторения кода:

const PRINT_COUNTRY =
    'Напишите название страны в которую нужно доставить товар';
const CANCEL = 'Отменено пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';

let message = prompt(PRINT_COUNTRY);
let credite = 0;


if (message === null) {
    message = CANCEL;
} else {
    const countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

    switch (countryName) {
        case 'Китай':
            credite = 100;
            break;

        case 'Южная америка':
            credite = 250;
            break;

        case 'Австралия':
            credite = 170;
            break;

        case 'Индия':
            credite = 80;
            break;
        case 'Ямайка':
            credite = 120;
            break;
        default:
            message = NOT_DELIVERY;
    }
}

if (prise > 0) {
    message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;
}
alert(message);