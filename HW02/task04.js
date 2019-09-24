"use strict";

const formatString = function (string) {
    let stringLength = string.length;
    console.log(stringLength);
    if (stringLength <= 40) {
        return string;
    } else {
        return `${string.slice(0, 40)}...`
    }
}

formatString('Curabitur ligula sapien, tincidunt nonaa.');
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));