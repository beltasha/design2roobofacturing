const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  var service = require('./service.js');
  const reqUrl = url.parse(req.url, true);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT');
	res.setHeader('Access-Control-Allow-Headers', '*');

  // GET Endpoint
  if (reqUrl.pathname == '/api/assembly-processes' && req.method === 'GET') {
    service.request(req, res);
  } else {
    console.log(`Request Type: ${req.method} Invalid Endpoint: ${reqUrl.pathname}`);

    service.invalidRequest(req, res);
  }
});