const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      return res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      const message500 = { error: 'An unexpected error occurred.' };
      res.status(500).json(message500);
    });
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!name || !course || !score || isNaN(score) || score > 100 || score < 0) {
    const message400 = { error: 'a require field is missing or score must be between 0 and 100.' };
    res.status(400).send(message400);
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows[0];
      return res.status(201).json(grades);
    })
    .catch(err => {
      console.error(err);
      const message500 = { error: 'An unexpected error occurred.' };
      res.status(500).json(message500);
    });
});

app.put('/api/grades/:id', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const id = Number(req.params.id);

  if (!name || !course || !score || isNaN(score) || score > 100 || score < 0) {
    const message400 = { error: 'a require field is missing or score must be between 0 and 100.' };
    res.status(400).send(message400);
    return;
  }

  const sql = `
  update "grades"
  set "name" = $1,
    "course" = $2,
     "score" = $3
  where "gradeId" = $4
  returning *;
  `;

  const params = [name, course, score, id];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows;
      if (result.rowCount === 0) {
        const message404 = { error: `cannot find gradeId ${id}` };
        return res.status(404).send(message404);
      } else {
        res.status(200).json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      const message500 = { error: 'An unexpected error occurred.' };
      res.status(500).json(message500);
    });
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id < 0) {
    const message400 = { error: 'an Id must be a positive integer.' };
    res.status(400).send(message400);
    return;
  }

  const params = [id];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rowCount === 1) {
        // eslint-disable-next-line no-unused-vars
        const message204 = { success: `gradeId ${id} was deleted.` };
        return res.sendStatus(204);
      } else {
        const message404 = { error: `cannot find note with id ${id}` };
        return res.status(404).send(message404);
      }
    })
    .catch(err => {
      console.error(err);
      const message500 = { error: 'An unexpected error occurred.' };
      res.status(500).json(message500);
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
