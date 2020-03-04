const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db/queries.js');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.get('/', db.getAll)
app.post('/', db.createBug)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })