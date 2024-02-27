const http = require('http');
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

      for (const key in eachFields) {
        if (key) {
          outputString += `Number of students in ${key}: ${eachFields[key].length}. List: ${eachFields[key].join(', ')}\n`;
        }
      }
      resolve(outputString);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const plainResponse = 'Hello Holberton School!';

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': plainResponse.length,
    });
    res.end(plainResponse);
  }

  if (req.url === '/students') {
    countStudents(process.argv[2].toString()).then((outputString) => {
      // const outString = outputString.slice(0, -1);
      res.end(outputString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;