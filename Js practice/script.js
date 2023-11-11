'use strict';
/*console.log("Khaffy");

let cup = 2;

console.log(cup, typeof cup);

const khaffy = `i'm a lady`;
console.log(khaffy, typeof khaffy);

//block scope

if (true) {
  let x = 1;
  const y = 3;
  console.log(x, y);
}

//console.log(x, y);  this will give error because it's defined inside a block

//function scope

function example() {
  var x = "20";
  console.log(x, typeof x);
}

example(); // we have to call the function if we want it to show what we log

//Global scope

var examScore = "30";

function test() {
  console.log(examScore);
}

test(); // we have to call the function
console.log(examScore, "testing for global scope"); // this is also working because the 'var' is a global scope

//Mathematical operators

var x = 2;
var y = 5;
var z = 8;

console.log(x + y + z);
x++;
console.log(x);
console.log(z / x);

//Strings and template literals

const name = "khaffy";
const age = 23;

console.log(`My name is ${name} and i'm ${age} years old`);

const message = `i'm a programmer.
 i live in Ilorin.
 i am hardworking.`;// this is a multi-line statement

console.log(message);*/

/*//..if/else statements
const name = 'khaffy';

//swimming = true;
let swimming = false;

if (swimming) {
  console.log(`${name} loves swimming`);
} else {
  console.log(`${name} doesn't swim`);
}

//Type Conversion

const birthYear = '1999';
//console.log(birthYear, typeof birthYear);

const newBirthYear = Number(birthYear);
console.log(newBirthYear, typeof newBirthYear); // this is to change the birthYear in a string to number

console.log('25' < '18');

console.log('25' < '30');
console.log('5' > '1');
console.log('30' > '3');

console.log('32' + 3);
console.log('3' + '21');

// prompt function

let advice = prompt('do you want to live long ?');
console.log(advice);

let yourAge = prompt('how old are you ?');

let age = parseInt(yourAge); // this is to change the string value we will get to an integer
console.log(age, typeof age);*/

/* //Boolean Logic

//And Operator

let x = 10;
let y = 13;
let z = 17;
let p = 20;

console.log(x > 15 && y < 20); //false
console.log(x < 20 && z > x); //true

//Or Operator

console.log(x > 15 || y < 20); //true
console.log(x > 20 || z < x); //false

//Not Operator

console.log(!(x > 15 && y < 20) || x > 15 || y < 20); //true
console.log(!(x < 20 && z > x) && (p === 20 || x > p)); //false

//The Switch Statement

const month = 'June';

switch (month) {
  case 'April':
    console.log(`Easter Celebration`);
    console.log(`i am for testing`);
    break;
  case 'May':
    console.log(`Holiday Celebration`);
    break;
  case 'June':
    console.log(`Khaffy's Birthday Celebration`);
    break;
  default:
    console.log(`No celebration this month`);
}

if (month === 'April') {
  console.log(`Easter Celebration`);
  console.log(`i am for testing`);
} else if (month === 'May') {
  console.log(`Holiday Celebration`);
} else if (month === 'June') {
  console.log(`Khaffy's Birthday Celebration`);
}

// Conditional operator
const person = 'khaffy';

const ageKhaffy = 24;

ageKhaffy >= 18
  ? console.log(`${person} is above legal age`)
  : console.log(`${person} is not of legal age`);

const knowAge =
  ageKhaffy >= 18
    ? `${person} is above legal age`
    : `${person} is not of legal age`;

console.log(knowAge);*/

// Functions

/*function cup() {
  console.log(`this function is for 7 cups`);
}

cup();

//
function school(tablesNum, chairsNum) {
  const classRoom = `we need ${tablesNum} tables and ${chairsNum} chairs in the classroom`;
  return classRoom;
}

school(12, 18);

const classInfo = school(12, 18);
console.log(classInfo);

const classInfo2 = school(23, 43);
console.log(classInfo2);

// another example

const person = 'Jide';

function clothes(shirts, trousers) {
  const dressing = `${person} has a wardrobe full of ${shirts} shirts and ${trousers} trousers`;
  return dressing;
}

const fullWardrobe = clothes('long-sleeved', 'black');
console.log(fullWardrobe);

const clothing = clothes('plain', 'white');
console.log(clothing);

//Function Declaration

function market(foodstuffs) {
  return `i did shopping and bought a lot of ${foodstuffs}`;
}

const shopping = market('ingredients');
console.log(shopping);

//eg 2

function birthYear(yearOfBirth) {
  return 2023 - yearOfBirth;
}

const myAge = birthYear(1999);
console.log(myAge);

//Function Expression
// (foodstuffs) {
//return `i did shopping and bought a lot of ${foodstuffs}`;
//}

const shopping2 = function (foodstuffs) {
  return `i did shopping and bought a lot of ${foodstuffs}`;
};

const marketthings = shopping2('rice');
console.log(marketthings);

//eg 2

const news = function (newspaper) {
  const information = true;

  if (information) {
    console.log(`The presidential-elect has been announced`);
  } else {
    console.log(`The presidential election result is not out yet`);
  }
};

const electionResult = news('info');*/

// let i = 47;

// let nextNum = Math.ceil(i / 5) * 5;
// console.log(nextNum);

// const intGrades = [4, 73, 67, 38, 33];
// console.log(intGrades);

// intGrades.forEach(function (int, i, arr) {
//   const nextNum = Math.ceil(int / 5) * 5;
//   const n = nextNum - int;

//   if (int < nextNum && n == 2) {
//     console.log(nextNum);
//   } else if (int < nextNum && n == 3) {
//     console.log(int);
//   } else if (int && nextNum < 40) console.log(int);

//   // console.log(nextNum);
// });

/*HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
Examples

 round to  (85 - 84 is less than 3)
 do not round (result is less than 40)
 do not round (60 - 57 is 3 or higher)
Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer, , the number of students.
Each line  of the  subsequent lines contains a single integer, .

Constraints

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33*/

/*const intGrades = [73, 67, 38, 33];
const roundInt = [];

const gradingStudents = function () {
  intGrades.forEach(function (int) {
    const nextNum = Math.ceil(int / 5) * 5;
    const n = nextNum - int;
    if (nextNum >= 40 && int < nextNum && n < 3) {
      console.log(nextNum);
      roundInt.push(nextNum);
    } else if (int >= 40 && int < nextNum && n == 3) {
      console.log(int);
      roundInt.push(int);
    } else if (int && nextNum < 38) {
      console.log(int);
      roundInt.push(int);
    }
  });

  return roundInt;
};

console.log(gradingStudents(intGrades));*/

/*const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const obj = {};
function sockMerchant(ar) {
  // Write your code here

  for (let i = 0; i < ar.length; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]] = obj[ar[i]] + 1;
    }
  }

  return Object.values(obj).reduce((acc, curr) => {
    acc += Math.floor(curr / 2);
    return acc;
  }, 0);
}

console.log(sockMerchant(ar));*/

/*const intGrades = [73, 67, 38, 33];

function gradingStudents(grades) {
  // Write your code here

  const roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const multipleof5 = Math.ceil(grades[i] / 5) * 5;

    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else {
      if (multipleof5 - grades[i] < 3) {
        roundedGrades.push(multipleof5);
      } else {
        roundedGrades.push(grades[i]);
      }
    }
  }

  return roundedGrades;
}

const roundedGrades = gradingStudents(intGrades);
console.log(roundedGrades);*/

/*const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  // Write your code here
  const sockCounts = {};
  let pairCount = 0;

  for (let i = 0; i < n; i++) {
    const color = ar[i];
    if (sockCounts[color]) {
      sockCounts[color]++;
    } else {
      sockCounts[color] = 1;
    }
  }

  for (let color in sockCounts) {
    const count = sockCounts[color];
    pairCount += Math.floor(count / 2);
  }

  return pairCount;
}

console.log(sockMerchant(n, ar));

const steps = 8;
const path = 'UDDDUDUU';

function countingValleys(steps, path) {
  // Write your code here

  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      altitude++;
      if (altitude === 0) {
        valleys++;
      }
    } else if (path[i] === 'D') {
      altitude--;
    }
  }

  return valleys;
}

console.log(countingValleys(steps, path));*/

////////javaScript Revision

/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKaolas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKaolas);

function checkWinner(avgDolphins, avgKaolas) {
  if (avgDolphins > 2 * avgKaolas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKaolas})`);
  } else if (avgKaolas > 2 * avgDolphins) {
    console.log(`Kaolas wins (${avgKaolas} vs ${avgDolphins})`);
  } else console.log('No team wins');
}

checkWinner(scoreDolphins, scoreKaolas);*/

//For loop, break and continue statements

/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr = [];
const evenArr = [];

function pickIt() {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenArr.push(i);
    } else {
      oddArr.push(i);
    }
  }
}

pickIt();
console.log(oddArr, evenArr);

const numbers = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const remNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 10) continue;

  remNumbers.push(numbers[i]);
}

console.log(remNumbers);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 30) break;

  console.log(numbers[i]);
}*/
