/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')

//const interface = 'drink'*/


//Function

/*function logger() {
    console.log('my name is khaffy')
}

// calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)


const appleOrangeJuice = fruitProcessor(2,4);
console.log(fruitProcessor(2,4))

//example

function bioGraphy(year,month,date){
    console.log(year,month,date);
   const person = `my name is shilekhaffy, i was born in the year ${year}, month of ${month} on the ${date}`;
    return person;
}

//bioGraphy(1999,06,15);
const aboutMe = bioGraphy(1999,06,15);
console.log(aboutMe)

//example 2

function age (currentYear,birthYear){
    const myAge = `i am ${currentYear - birthYear} years old.`;
    return myAge;
}

age(2023,1999);
const realAge = age(2023,1999);
console.log(realAge);*/

// function declarations and expression

// function declaration

/*function calcAge1(birthYear){
    return 2037 - birthYear;
}

//calcAge1(1991);
const age1 = calcAge1(1991);
console.log(age1);

// function expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

//calcAge2(1991)
const age2 = calcAge2(1992)
console.log(age1, age2)

// calling functn declaratn before defining it in the code

const age3 = calcAge3(1991);

function calcAge3(birthYear){
    return 2037 - birthYear;
}

//calcAge3(1991);
console.log(age3);*/

// arrow function

/*//birthYear => 2037 - birthYear; then it is stored in a var.
const calcAge4 = birthYear => 2037 - birthYear;

//calcAge4(1991);

const age4 = calcAge4(1991);
console.log(age4)

//example 2

const yearUntilRetirement= birthYear =>{
    const age= 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1991));

// example 3 having two parameters in the function

const yearUntilRetirement2= (birthYear,firstName) => {
    const age= 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement2(1991,'jonas'));
console.log(yearUntilRetirement2(1996,'khaffy'));*/

// function calling other function

/*function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice; 
  }
  
 console.log(fruitProcessor(2,3)) ;*/

 // Coding Challenge 1

 //calcAverage => firstScore + secondScore + thirdScore;
 /*const calcAverage = (firstScore,secondScore,thirdScore) =>{
    const average = (firstScore + secondScore + thirdScore)/3;
    return average;
 }

  console.log(calcAverage(23,44,71));
  console.log(calcAverage(65,54,49));


  function checkWinner(avgDolphins,avgKaolas){
    if(avgDolphins >= (2 * avgKaolas)){
        console.log(`dolphins team wins 🏆`)
    }
    else if (avgKaolas >= (2 * avgDolphins)){
        console.log(`kaolas team wins 🏆`)
    }
    else{
        console.log(`none of the teams wins`)
    }
  }

  checkWinner(46,56);

  // test data 2

  const calcAverage2 = (x,y,z)  => (x+y+z)/3;

  const theDolphins = calcAverage2(85,54,41);
  const theKaolas =calcAverage2(23,34,27);

  console.log(theDolphins,theKaolas)

  function checkWinner2(avgDolphins,avgKaolas){
    if(avgDolphins >= (2 * avgKaolas)){
        console.log(`dolphins team wins 🏆 (${avgDolphins} vs ${avgKaolas})`)
    }
    else if (avgKaolas >= (2 * avgDolphins)){
        console.log(`kaolas team wins 🏆 (${avgKaolas} vs ${avgDolphins}`)
    }
    else{
        console.log(`none of the teams wins`)
    }
  }

  checkWinner2(theDolphins,theKaolas);*/

  //note the checkwinner function is independent, we only input theDolphins and theKaolas because we have them as constant otherwise we can just input arguement(24,5)

  // Arrays

  /*const friends= ['Micheal','Steven','Peter'];
  console.log(friends);

  const years = new Array(1991,1993,1999,2019);
  console.log(years);

  console.log(friends[0]);
  console.log(friends[2]);

  //to get the number of items in an array

  console.log(friends.length);
  
  //to get the last item in an array

  console.log(friends[friends.length-1]);

  //to replace an item in an array

  friends[2]='Jay';
  console.log(friends);

  // we can put different values and even an array in another array

  const firstName ='Shile';
  const aboutMe = [firstName, 'Khaffy', 2023-1999, 'programmer', friends];
  console.log(aboutMe);*/

  // Exercise: to calc age of individuals stored in an array

  /*const years =[1990,1967,2002,2010,2018];

  const calcAge = function (birthYear){
    return 2023 - birthYear
  }

  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length - 1]);
  console.log(age1,age2,age3);

  // to store the value in an array

  const ages =[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
  console.log(ages);*/

 /* // Basic operations in array 

  //Adds elements

  const friends= ['Micheal','Steven','Peter'];
  friends.push('Jay')
  console.log(friends);

 //to log the value of the new length

 const newLength = friends.push();
 console.log(newLength);

 friends.unshift('John');
 console.log(friends)

 // Remove elements

 friends.pop();
 console.log(friends);

 friends.shift();
 console.log(friends);

 console.log(friends.indexOf('Steven'));
 console.log(friends.indexOf('bob'));

 console.log(friends.includes('Steven'));
 console.log(friends.includes('bob'));

//includes method can be used for conditional statements

if(friends.includes('Steven')){
    console.log(`you hava a friend called Steven`)
}*/
 

//Coding Challenge 2

/*const bill = 100;

 const calcTip = (bill)=>{
    const tip = bill <= 300 && bill >= 50 ? 0.15 * bill: 0.2 * bill;
    return tip;
  }

 calcTip(bill)
 console.log(calcTip(bill));

 const bills = [125,555,44]
 console.log(bills);

 const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

 console.log(tips);

 const totalValue =[(bills[0] + calcTip(bills[0])),(bills[1] + calcTip(bills[1])),(bills[2] + calcTip(bills[2]))];

 //or like this to calculate bills+tips

 const totalValue2 =[bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

 console.log(totalValue);
 console.log(totalValue2);*/

 // Intro to objects

 /*const aboutMe ={
    firstName:'Shile',
    lastName:'khaffy',
    age:2023-1999,
    job:'programmer',
    friends:['ayo','ola','ade']
 }

console.log(aboutMe)*/

//Dot & Bracket Notation..how to retrieve properties from object

/*console.log(aboutMe.lastName);///dot notation
console.log(aboutMe['lastName']);///bracket

const nameKey = 'Name';
console.log(aboutMe['first' + nameKey]);
console.log(aboutMe['last' + nameKey]);

//experiment

/*const interestedIn = prompt(`what do want to know about me, firstName, lastName, age, job or friends`);

if (aboutMe[interestedIn]){
    console.log( (aboutMe[interestedIn]));
}
else{
    console.log(`wrong request, please check the options`);
}*/


// how to add properties to objects

/*aboutMe.location ='Nigeria';
aboutMe['twitter'] = '@olanshile1365';
console.log(aboutMe);

// challenge
// Write - Khaffy has 3 friends and her best friend is ayo using the object.

console.log(`${aboutMe.lastName} has ${aboutMe.friends.length} friends and her best friend is ${aboutMe.friends[0]}`)*/

// Object Method

/*const aboutMe ={
    firstName:'Shile',
    lastName:'Khaffy',
    birthYear:1999,
    job:'programmer',
    friends:['Ayo','Ola','Ade'],
    hasDriversLicense : true,
    // calcAge: function (birthYear){
    //     return 2023 - 1999;
    // }
    
 //to use the 'this' keyword, it refers to an object
    // calcAge: function (){
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }


    // in cases where we need the value of age multiple times

     // calcAge: function (){
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // } is changed to the one below.......

    calcAge: function (){
       this.age = 2023-this.birthYear;
        return this.age;
    },
    

    getSummary: function(){
      return `${this.lastName} is a ${this.calcAge()}years old ${this.job} and she has ${this.hasDriversLicense ? 'a':'no'} drivers license`
    }
}

//console.log(aboutMe.calcAge(1999));  /// dot notation
//console.log(aboutMe['calcAge'](1999));  /// bracket notation


//in cases where we need the value of age multiple times--to log it
// console.log(aboutMe.calcAge());
// console.log(aboutMe.calcAge());
// console.log(aboutMe.calcAge());
// console.log(aboutMe.calcAge());

// instead of logging it the way we did above, we can do it like this
console.log(aboutMe.calcAge());
console.log(aboutMe.age);
console.log(aboutMe.age);
console.log(aboutMe.age);

//Challenge
// write a method-getSummary for "khaffy is 24years old programmer and she has a drivers license"

console.log(aboutMe.getSummary());*/

//Coding challenge 3

/*const mark={
    fullName:'Mark Miller',
    mass: 78,
    height:1.69,

    calcBMI:function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }

}

const john={
    fullName:'John Smith',
    mass: 92,
    height:1.95,

    calcBMI:function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}


console.log(mark);
console.log(john);

console.log(mark.calcBMI());
console.log(john.calcBMI());

if(john.bmi > mark.bmi){
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`)
}
else if(mark.bmi > john.bmi){
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`)
}*/

// iteration: The For Loop

/*for(let rep = 1; rep <= 10; rep++){
  //console.log(`Lifting weight repetition 1 🏋️‍♀️`);
  console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
}*/

// Looping Arrays,Breaking and Continuing

/*const khaffy=[
    'Shile',
    'Khaffy',
    2023-1999,
    'programmer',
    friends=['ayo','ola','ade'],
    true
]

const types=[]

for( let i = 0; i < khaffy.length; i++){
    //reading from khaffy array
    console.log(khaffy[i],typeof khaffy[i]) ;

    //filling types array
   //types[i] = typeof khaffy[i];

   // using the push method to fill an empty array
   types.push(typeof khaffy[i]);
   
}

console.log(types);

//exercise

const years = [1999,1993,1988,1985];
const ages= [];

for(let i = 0; i < years.length; i++){
   ages.push(2023 - years[i]);
}

console.log(ages);

//Continue and Break Statement
console.log(`----ONLY STRINGS----`) ///To indicate the continue statement

for( let i = 0; i < khaffy.length; i++){
   
   if(typeof khaffy[i] !== 'string') continue;

   console.log(khaffy[i],typeof khaffy[i]);
}

console.log(`----BREAK WITH NUMBER----`)////To indicate the break statement

for( let i = 0; i < khaffy.length; i++){
   
    if(typeof khaffy[i] === 'number') break;
 
    console.log(khaffy[i],typeof khaffy[i]);
 }*/

 // Looping backwards
 /*const khaffy=[
    'Shile',
    'Khaffy',
    2023-1999,
    'programmer',
    friends=['ayo','ola','ade'],
    true
   
]

for(let i = khaffy.length - 1; i >= 0; i--){
    console.log(i, khaffy[i]);
}

// Creating a loop in a loop

for(let exercise = 1;exercise < 4; exercise++){
    console.log(`---starting exercise ${exercise}---`);

    for(let rep = 1;rep < 6; rep++){
        console.log(`Exercise ${exercise}: lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}*/

// The While Loop

/*let rep = 1;
while(rep <= 10){
    console.log(`lifting weight repetition ${rep} 🏋️‍♀️`);
    rep++
}

let dice =Math.trunc( Math.random() * 6) + 1;
//console.log(dice)
while(dice !== 6){
  console.log(`You rolled a ${dice}`)
  dice =Math.trunc( Math.random() * 6) + 1;

  if(dice === 6){
    console.log(`Loop is about to end`)
    // console.log(`you rolled a ${dice}....`) //experiment
  }
}*/

// Coding Challenge 4

const calcTip = (bill)=>{
    const tip = bill <= 300 && bill >= 50 ? 0.15 * bill: 0.2 * bill;
    return tip;
  }

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

  for(let i = 0; i < bills.length; i++){
   const tip = calcTip(bills[i]);
   tips.push(tip)
   totals.push(tip + bills[i])
  }

  console.log(tips,totals);
  

  /// exercise 2

  let sum = 0
  const calcAverage = (arr)=>{
    
  }
