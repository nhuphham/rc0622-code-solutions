const fs = require('fs');

// console.log(randomNum)
fs.writeFile('./note.txt', process.argv[2], err => err);
