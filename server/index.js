const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());





app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })