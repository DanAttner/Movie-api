console.log('hello node');

const fs = require('fs');

fs.readFile('./hupla.txt', 'utf-8', (err, data) => {
  if (err) { throw err; }
  console.log('data: ', data);
});