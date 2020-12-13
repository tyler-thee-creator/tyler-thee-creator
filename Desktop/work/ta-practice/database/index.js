const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'ta_practice',
  host: 'localhost',
  user: 'root',
  password: '',
});

var getAllFromTable = (table, cb) => {
  connection.query(`SELECT * FROM ${table} ORDER BY age DESC;`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

var insertOneIntoTable = (data, table, cb) => {
  var fields = Object.keys(data).join(', ');
  var values = Object.values(data).join(', ');
  connection.query(`INSERT INTO ${table} (${fields}) VALUES (${values});`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports.getAllFromTable = getAllFromTable;
module.exports.insertOneIntoTable = insertOneIntoTable;