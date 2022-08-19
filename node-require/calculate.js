const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const left = parseInt(process.argv[2]);
const operator = process.argv[3];
const right = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('result: ', add(left, right));
}
if (operator === 'minus') {
  console.log('result: ', subtract(left, right));
}
if (operator === 'multiply') {
  console.log('result: ', multiply(left, right));
}
if (operator === 'divide') {
  console.log('result: ', divide(left, right));
}
