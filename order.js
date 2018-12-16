'use strict';

module.exports = class Order {
  constructor(number, orderList, table, waiter) {
    this.number = number;
    this.orderList = orderList;
    this.table = table;
    this.waiter = waiter;
  }

  getDiscount() {
    if (this.table.card) {
      return this.table.card.discount / 100;
    } else {
      return 0;
    }
  }

  finalPrice() {
    let sum = 0;
    this.orderList.forEach((dish) => {
      sum += dish.getPrice();
    })

    return (sum * (1 - this.getDiscount())).toFixed(2);
  }

  printOrder() {
    console.log('Номер заказа: ' + this.number);
    console.log('Список заказа: ');
    this.orderList.forEach((dish) => {
      dish.printDish();
    })
    this.table.printTable();
    this.waiter.printWaiter();
    console.log('Стоимость заказа: ' + this.finalPrice());
  }
}
