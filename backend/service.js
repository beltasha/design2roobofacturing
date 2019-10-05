const url = require('url');
const fs = require('fs');

exports.request = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  const page = parseInt(reqUrl.query.page);
  const size = parseInt(reqUrl.query.size) || 20;
  const search= (reqUrl.query.search || '').trim().toLowerCase();

  const offsetFrom = page * size;
  const offsetTo = offsetFrom + size;
  const response = JSON
    .parse(fs.readFileSync('assembly-process.json', 'utf8'))
    .filter((item) => {
      return !search || item.title.toLowerCase().includes(search)
    })
    .slice(offsetFrom, offsetTo);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};

exports.invalidRequest = function (req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Invalid Request');
};