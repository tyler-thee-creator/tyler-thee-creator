const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/data', (req, res) => {
  db.getAllFromTable('ta_practice_table', (err, data) => {
    if (err) {
      res.send(err);
      res.end();
    } else {
      res.send(data);
      res.end();
    }
  })
});

app.post('/data', (req, res) => {
  var data = req.body;
  var name = data.name;
  data.name = "'" + name + "'"
  db.insertOneIntoTable(data, 'ta_practice_table', (err, data) => {
    if (err) {
      res.send(err);
      res.end();
    } else {
      db.getAllFromTable('ta_practice_table', (err, data) => {
        if (err) {
          res.send(err);
          res.end();
        } else {
          res.send(data);
          res.end();
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
