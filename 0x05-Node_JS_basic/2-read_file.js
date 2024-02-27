const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf-8');
  const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
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
  console.log(`Number of students: ${totalStudents}`);

  for (const key in eachFields) {
    if (key) {
      console.log(`Number of students in ${key}: ${eachFields[key].length}. List: ${eachFields[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;
