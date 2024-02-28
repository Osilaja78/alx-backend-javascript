const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, res) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (res) {
      const lines = res.trim().split('\n').filter((line) => line.trim() !== '');
      const fields = lines.shift().split(',');

      const countByField = {};
      fields.forEach((field) => { countByField[field] = 0; });

      const eachFields = {};
      lines.forEach((line) => {
        const values = line.split(',');
        fields.forEach((field, index) => {
          if (values[index]) {
            countByField[field] += 1;
          }
        });

        if (eachFields[values[3]]) {
          eachFields[values[3]].push(values[0]);
        } else {
          eachFields[values[3]] = [];
          eachFields[values[3]].push(values[0]);
        }
      });

      const totalStudents = lines.length;
      let outputString = `Number of students: ${totalStudents}\n`;

      const lastIndex = Object.keys(eachFields).length - 1;
      let currentIndex = 0;

      for (const key in eachFields) {
        if (key) {
          if (currentIndex !== lastIndex) {
            outputString += `Number of students in ${key}: ${eachFields[key].length}. List: ${eachFields[key].join(', ')}\n`;
          } else {
            outputString += `Number of students in ${key}: ${eachFields[key].length}. List: ${eachFields[key].join(', ')}`;
          }
          currentIndex += 1;
        }
      }
      resolve(outputString);
    }
  });
});

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const resList = ['This is the list of our students'];

  countStudents(process.argv[2].toString()).then((outputString) => {
    resList.push(outputString);
    res.send(resList.join('\n'));
  }).catch(() => {
    res.statusCode = 404;
    resList.push('Cannot load the database');
    res.send(resList.join('\n'));
  });
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
