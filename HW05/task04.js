"use strict";

class StringBuilder {
    constructor([...str]) {
        this._value = str;
    };

    get value() {
        return this._value;
    };
    append(str) {
        this._value.push(str);
        return this.string;
    };
    prepend(str) {
        this._value.unshift(str);
    };
    pad(str) {
        this._value.splice(0, 0, ...str);
        this._value.push(str);
    };
};

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);