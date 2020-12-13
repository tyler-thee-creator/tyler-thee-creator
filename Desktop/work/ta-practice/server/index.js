const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send('hello word');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
