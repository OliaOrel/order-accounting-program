'use strict';

module.exports = class Waiter {
  constructor(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    // this.tips
    // this.percentage
  }

  printWaiter() { console.log('Официант: ' + this.name + ' ' + this.surname); }
}
