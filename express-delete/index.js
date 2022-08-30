const express = require('express');
const app = express();

let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.use('/api/grades/:id', (req, res) => {
  const { id } = req.params;
  const result = Object.values(grades).filter(el => el.id !== Number(id));
  grades = result;
  res.send('success');
});

app.use('/api/grades', (req, res) => {
  res.json(grades);
});

// const port = 5000;
// app.listen(port, () => console.log('iajdijfaisjfi'))
