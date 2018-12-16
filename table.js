'use strict';

module.exports = class Table {
  constructor(number, card, tips) {
    this.number = number;
    this.card = card;
    this.tips = tips;
  }

  printTable() { console.log('Столик: ' + this.number + '\nКарточка: ' + this.card.cardId + '\nЧаевые: ' + this.tips); }
}
