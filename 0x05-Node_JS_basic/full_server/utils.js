const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  console.log(path);
  fs.readFile(path, 'utf-8', (err, res) => {
    if (err) {
      console.log(err);
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

      resolve(eachFields);
    }
  });
});

export default readDatabase;
