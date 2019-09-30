const url = require('url');
const fs = require('fs');

exports.request = function (req, res) {
  const response = JSON.parse(fs.readFileSync('assembly-process.json', 'utf8'));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};

exports.invalidRequest = function (req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Invalid Request');
};