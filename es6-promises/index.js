const takeAChance = require('./take-a-chance');

const promise = takeAChance('Nhu')
  .then(resolve => {
    console.log(resolve);
  })
  .catch(reject => {
    console.error(reject.message);
  });
