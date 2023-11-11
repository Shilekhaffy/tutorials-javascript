'use strict';

//Hoisting with variables

/*console.log(me);
//console.log(job);
//console.log(year);

var me = 'khaffy';
let job = 'programmer';
const year = 1999;

//Functions

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//TDZ

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);*/

//This keyword

/*console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const khaffy = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

khaffy.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = khaffy.calcAge;
matilda.calcAge();

const f = khaffy.calcAge;
f();*/

//Regular functions vs Arrow functions

/*//var firstName = 'Shile';

const khaffy = {
  firstName: 'Khaffy',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    //console.log(this.year >= 1981 && this.year <= 1996);

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

khaffy.greet();
khaffy.calcAge();


//arguements keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(3, 7, 9);*/

//Primitives Vs Objects(reference types)

/*let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Khaffy',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);*/

//Primitives Vs Objects in practice

//primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//copying objects
const jessicaTwo = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessicaTwo);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessicaTwo);
console.log('After marriage:', jessicaCopy);

//Object assign does not work for deep nested objects
const jessicaThree = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy2 = Object.assign({}, jessicaThree);
jessicaCopy2.lastName = 'Davis';

jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');

console.log('Before marriage:', jessicaThree);
console.log('After marriage:', jessicaCopy2);
