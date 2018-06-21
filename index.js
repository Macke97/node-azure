const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  req.body.test = {message: 'HEJSAN HOPSAN'};
  res.json(req.body);
});

app.listen(port, () => console.log('Started!'));