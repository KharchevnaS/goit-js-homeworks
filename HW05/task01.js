'use strict';

const Account = function (Login, Email) {
    this.Login = Login;
    this.Email = Email;
   
}
Account.prototype.getInfo = function () {
    console.log(`Login: ${(mango.Login)}, Email: ${(mango.Email)}`);
    console.log(`Login: ${(poly.Login)}, Email: ${(poly.Email)}`);
}
console.log(Account.prototype.getInfo);

const mango = new Account('Mangozedog', 'mango@dog.woof');
const poly = new Account('Poly', 'poly@mail.com');
mango.getInfo();
poly.getInfo();  