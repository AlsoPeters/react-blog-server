const express = require('express');
const app = express();
const chalk = require('chalk');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(chalk.magenta.bold(`|| Server running on port ${PORT} ||`));
});
