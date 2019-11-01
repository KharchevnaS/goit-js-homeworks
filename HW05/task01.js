'use strict';

const account = function (login, email) {
    this.login = login;
    this.email = email;

}
account.prototype.getInfo = function () {
    console.log(`Login: ${(mango.login)}, Email: ${(mango.email)}`);
    console.log(`Login: ${(poly.login)}, Email: ${(poly.email)}`);
}
console.log(account.prototype.getInfo);

const mango = new account('Mangozedog', 'mango@dog.woof');
const poly = new account('Poly', 'poly@mail.com');
mango.getInfo();
poly.getInfo();