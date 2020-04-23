'use strict';

const express = require('express');

// Constants
const port =   process.env.PORT|| 3000;
console.log(process.env);
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, HOST);
console.log(`Running on http://${HOST}:${port}`);