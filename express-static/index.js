const express = require('express');
const path = require('path');
const app = express();

const directory = path.join(__dirname, 'public');
const eStatic = express.static(directory);
app.use(eStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
