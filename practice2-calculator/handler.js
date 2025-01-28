const fs = require('fs');
const {sum} = require('./sum');
const {home} = require('./home');
const {submit} = require('./submit');


const requestHandler = (req,res) => {
  console.log(req.url, req.method);
  if(req.url === '/'){
    return home(req, res);
   
  }else if(req.method === 'GET' && req.url.toLowerCase() === '/sum') {
    return sum(req,res);
 }else if(req.method === 'POST' && req.url.toLowerCase() === '/submit'){
  return submit(req,res);
 }
 res.write(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Undifind Page</title>
    </head>
    <body>
      <h1>404 erro !</h1>
      <p>this page is not fond 404! error</p>
      <a href="/">go to Home page</a>
    </body>
    </html>
  `);
  return res.end();
}

module.exports = requestHandler;
