const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
  client: new sqlite3.Database('./scholarships.sqlite')
});
exporter.save('scholarships', './scholarships.json', function (err) {
  // no error and you're good.
console.log(err);
});
