const fs = require('fs');

// fs.readFile('./hopper.txt', 'utf8');
// const argv = require('node:process');

// console.log(process.argv);

// const file = process.argv[2];
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) return;
  console.log(data);
});

// argv.argv.forEach((idx, val) => {
//   console.log(idx[2]);
// });
