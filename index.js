const express = require('express');
const app = express();
const chalk = require('chalk');
const db = require('./config/db');
const cors = require('cors');

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Assah');
});

app.post('/api/create', (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  console.log(username + title + text);

  db.query(
    'INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)',
    [title, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(chalk.magenta.bold(`|| Server running on port ${PORT} ||`));
});
