'use strict';

module.exports = class Dish {
  constructor(dish, portions, price1) {
    this.dish = dish;
    this.portions = portions;
    this.price1 = price1; // цена за одну порцию
    // this.price = this.portions * this.price1;
  }

  // getPrice() { return this.price; }
  getPrice() { return this.portions * this.price1; }

  printDish() { console.log(this.dish + ' ' + this.portions + ' ' + this.price1 + ' ' + this.getPrice()); }
}
