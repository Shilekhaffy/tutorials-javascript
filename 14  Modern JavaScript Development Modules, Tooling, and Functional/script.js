'use strict';
//Importing module

/*import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

addToCart('bread', 5);
console.log(price, tq);*/

console.log('Importing module');
/*// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// we can add the named and default export together but it is not advisable
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price);*/

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('risotto', 3);

console.log(cart);

///Introduction to NPM

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const khaffy = new Person('Khaffy');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));
//console.log(cart.filter(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
//import 'core-js/./es/array/find';

///this is for polyfilling async functions
import 'regenerator-runtime/runtime';
