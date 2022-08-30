const fs = require('fs');

function getRandomInt(max) {
  return (Math.floor(Math.random() * max)).toString();
}

// console.log(randomNum)
fs.writeFile('./random.txt', getRandomInt(100), err => err);
