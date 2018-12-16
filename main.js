'use strict';

const Order = require('./order.js')
const Dish = require('./dish.js')
const Waiter = require('./waiter.js')
const Table = require('./table.js')
const Card = require('./card.js')

const dish1 = new Dish('potato', 2, 38);
const dish2 = new Dish('meat', 2, 68);
const waiter1 = new Waiter('01', 'Ivan', 'Ivanov');
const card1 = new Card('123', 'Ivan', 'Ivanov', 20);
const table1 = new Table(2, card1, false);
const order1 = new Order(1, [dish1, dish2], table1, waiter1);
order1.printOrder();
// console.log(order1);
