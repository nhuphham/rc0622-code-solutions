let count = 3;
var interval = setInterval(() => {
  console.log(count--);
  if (count < 0) {
    clearInterval(interval);
    console.log('Blast off!');
  }
}, 1000
);
