const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Emil suger på Rocket League');
});

app.listen(port, () => console.log('Started!'));