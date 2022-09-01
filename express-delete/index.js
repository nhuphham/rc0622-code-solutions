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

app.delete('/api/grades/:id', (req, res) => {
  const { id } = req.params;
  const result = Object.values(grades).filter(el => el.id !== Number(id));
  grades = result;
  res.send('success');
});

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000!');
});
