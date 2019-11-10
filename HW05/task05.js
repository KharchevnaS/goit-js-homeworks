'use strict';
class Car {
  static getSpecs(Car) {
    console.log(Object.entries(Car));
  }
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.distance = distance;
    this.isOn = isOn;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.maxSpeed < this.speed + value) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({
  maxSpeed: 200,
  price: 2000,
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
