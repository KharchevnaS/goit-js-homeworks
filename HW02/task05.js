'use strict';

const checkForSpam = function (string) {
    let unnecessaryWords = string.includes('sale' || 'spam');
    if (unnecessaryWords === true) {
        return true;
    } else {
        return false;
    };
};
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));