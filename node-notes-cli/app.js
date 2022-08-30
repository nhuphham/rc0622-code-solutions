const fs = require('fs');

const action = process.argv[2];
fs.readFile('data.json', (err, data) => {
  if (err) return;
  const el = JSON.parse(data);
  const nextId = el.nextId;
  let arr;
  let newData;
  let newNotes;
  switch (action) {
    case 'read':
      for (const key in el.notes) {
        const obj = el.notes;
        console.log(`${key}: ${obj[key]}`);
      }
      break;
    case 'create':
      el.notes[nextId] = process.argv[3];
      el.nextId++;
      fs.writeFile('data.json', JSON.stringify(el), err => err);
      break;
    case 'delete':
      newNotes = {};
      arr = Object.entries(el.notes);
      arr = arr.filter(ele => ele[0] !== process.argv[3]);
      arr.forEach(el => {
        newNotes[el[0]] = el[1];
      });
      newData = {
        nextId: el.nextId,
        notes: newNotes
      };
      fs.writeFile('data.json', JSON.stringify(newData), err => err);
      break;
    case 'update':
      el.notes[process.argv[3]] = process.argv[4];
      fs.writeFile('data.json', JSON.stringify(el), err => err);
      break;
    default:
      break;
  }
});
