const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('hello world');
});

// const port = 5000;
// app.listen(port, () => console.log(`listening on port ${port}`));
