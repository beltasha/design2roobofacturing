const url = require('url');
const fs = require('fs');

exports.request = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  const page = parseInt(reqUrl.query.page);
  const size = parseInt(reqUrl.query.size) || 20;
  const search= (reqUrl.query.search || '').trim().toLowerCase();
  const { assembly, review, sort } = reqUrl.query;

  const offsetFrom = page * size;
  const offsetTo = offsetFrom + size;
  
  const response = JSON
    .parse(fs.readFileSync('assembly-process.json', 'utf8'))
    .filter((item) => {
      const isFromSearchExist = search === 'null' || item.title.toLowerCase().includes(search);
      const isFromAssemblyExist = assembly==='null' || item.assemblyStatus === assembly;
      const isFromReviewExist = review === 'null' || item.reviewStatus === review;
      return isFromSearchExist && isFromAssemblyExist && isFromReviewExist;
    })
    .sort((a, b) => {
      const aDate =  new Date(a.updated.replace(/\s/g, ''));
      const bDate =  new Date(b.updated.replace(/\s/g, ''));
      return sort === 'ASC'
        ? aDate-bDate
        : bDate - aDate;
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