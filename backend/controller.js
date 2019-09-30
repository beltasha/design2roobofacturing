const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  var service = require('./service.js');
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (reqUrl.pathname == '/api/assembly-processes' && req.method === 'GET') {
    service.request(req, res);
  } else {
    console.log(`Request Type: ${req.method} Invalid Endpoint: ${reqUrl.pathname}`);

    service.invalidRequest(req, res);
  }
});