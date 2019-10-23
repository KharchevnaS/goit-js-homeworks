'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },

  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.bind(itemName);
};

invokeInventoryAction('Аптечка', inventory.add);
console.log(inventory.items);
invokeInventoryAction('Фильтр', inventory.remove);

console.log(inventory.items);