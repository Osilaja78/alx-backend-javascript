// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath).then((output) => {
      const outputString = ['This is the list of our students'];
      const keys = Object.keys(output);
      keys.sort();
      for (const key in output) {
        if (key) {
          outputString.push(`Number of students in ${key}: ${output[key].length}. List: ${output[key].join(', ')}`);
        }
      }
      response.status(200).send(outputString.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load database');
    });
  }

  static async getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath).then((output) => {
      if (field in output) {
        const outputString = `List: ${output[field].join(', ')}`;
        res.status(200).send(outputString);
      } else {
        res.status(500).send('Major parameter must be CS or SWE');
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
