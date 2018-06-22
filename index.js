const express = require('express');
const app = express();
const createError = require('http-errors');

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/message', messageRouter);

app.use((req, res, next) => {
   let error = new Error('Page not found, sorry for that');
   error.status = 404;
   next(error);
});

app.use((err, req, res, next) => {
  res.status = err.status || 500;
  res.send(err.message)
  
  
});

app.listen(port, () => console.log('Started!'));