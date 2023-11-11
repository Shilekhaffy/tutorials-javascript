'use strict';

/*const x = 23;

const calcAge = birthYear => 2023 - birthYear;

console.log();
console.log(calcAge(1999));
console.log(calcAge(2002));*/

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*  const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

   const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

  const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);*/

// Debugging with the Console and Breakpoints

/*const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // C fix the bug(change the prompt to a number)
    // value: prompt('Degree Celsius'),
    // value: Number(prompt('Degree Celsius')),
    value: 10,
  };

  // B find the bug
  console.table(measurement);
  // console.log(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A identify the bug
console.log(measureKelvin());

//Using a Debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);*/

//Coding Challenge

// 1) Understanding the problem

// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems

// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForest = function (arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    // string = string + `${arr[i]}ºC in ${i + 1}days...`;
    string += `${arr[i]}ºC in ${i + 1}days...`;
  }

  console.log('...' + string);
};

printForest(test1);
printForest(test2);
//console.log(test1.indexOf(21));
//console.log(arr);
//console.log(arr[0]);
