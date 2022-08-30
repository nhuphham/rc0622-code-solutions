const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf-8', (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});
