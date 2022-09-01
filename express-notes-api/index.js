const express = require('express');
const app = express();
const dataJSON = require('./data.json');


app.use(express.json());

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || isNaN(id)) {
    const message400 = { error: 'id must be a positive integer' };
    res.status(400).send(message400);
  } else if (!(dataJSON.notes[id])) {
    const message404 = { error: `cannot find note with id ${id}` };
    res.status(404).send(message404);
  } else {
    res.status(200).send(dataJSON.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!(req.body.content) || req.body.content === null) {
    const message400 = { error: 'content is a required field.' };
    res.status(400).send(message400);
  } else if (req.body.content !== null) {
    const newContent = req.body;
    const id = dataJSON.nextId++;
    newContent.id = id;
    dataJSON.notes[id] = newContent;
    const newObj = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', newObj, err => {
      const message500 = { error: 'An unexpected error occured.' };
      if (err) {
        console.error(err);
        res.status(500).send(message500);
      } else {
        res.status(201).send(dataJSON.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || isNaN(id)) {
    const message400 = { error: 'id must be a positive integer' };
    res.status(400).send(message400);
  } else if (!(dataJSON.notes[id])) {
    const message404 = { error: `cannot find note with id ${id}` };
    res.status(404).send(message404);
  } else if (dataJSON.notes[id]) {
    delete dataJSON.notes[id];
    const newObj = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', newObj, err => {
      const message500 = { error: 'An unexpected error occured.' };
      if (err) {
        console.error(err);
        res.status(500).send(message500);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || isNaN(id)) {
    const message400 = { error: 'id must be a positive integer' };
    res.status(400).send(message400);
  } else if (!(req.body.content)) {
    const message400 = { error: 'content is a required field.' };
    res.status(400).send(message400);
  } else if (!(dataJSON.notes[id])) {
    const message404 = { error: `cannot find note with id ${id}` };
    res.status(404).send(message404);
  } else if (dataJSON.notes[id] && req.body.content) {
    dataJSON.notes[id].content = req.body.content;
    const newObj = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', newObj, err => {
      const message500 = { error: 'An unexpected error occured.' };
      if (err) {
        console.error(err);
        res.status(500).send(message500);
      } else {
        res.status(200).send(dataJSON.notes[id]);
      }
    });
  }
});

// const port = 5000;
// app.listen(port, () => console.log(`listening on port ${port}`));
