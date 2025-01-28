const sum = (req,res) => {
  console.log(req.url, req.mothod);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculation Page</title>
    </head>
    <body>
      <h1>Welcome to calcutation sum page</h1>
        <form action="/submit" method="POST">
    <input type="text" id="num1" name="firstNo" placeholder="enter 1st no">
    <input type="text" id="num2" name="SecondNo" placeholder="enter 2nd no">
    <button  id="btn" type="submit">Get Result</button>
    </form>
    </body>
    </html>
    `);
    return res.end();
}


module.exports.sum = sum;