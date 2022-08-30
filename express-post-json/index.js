const express = require('express');
const app = express();

let id = 1;
const grades = [];

app.use(express.json())

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  // console.log(req.body)
  grades.push({...req.body, id})
  id++
  res.send('success')
})


// const port = 5000
// app.listen(port, () => console.log('lisenigaijgd'))
