const home = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <h1>Welcome to Home, Dude!</h1>
      <p>This is the home page of our Node.js application.</p>
      <a href="/sum">go to adition page</a>
    </body>
    </html>
  `);

  return res.end();
};

module.exports.home = home;


