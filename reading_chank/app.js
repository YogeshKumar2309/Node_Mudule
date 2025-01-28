const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);

  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Oshin</title></head>');
  res.write(`
    <body>
    <form action="/message" method="POST">
    <input type="text" name="username" placeholder="Username"><br><br>
    <label for="gender">Gender</label>
    <input type="radio" name="gender" id="gender" value="male">
    <label for="gender">Male</label>
    <input type="radio" name="gender" id="gender" value="female">
    <label for="gender">Female</label><br><br>
    <button type="submit">Send</button>
    </form>
    </body>
    `);
    return res.end();
  }else if(req.method === 'POST' && req.url === '/message'){
    //Buffering chunk of data
    const body = [];   

    //reading chunk of data
    req.on("data",(chunk) =>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      //parsing request
      const params = new URLSearchParams(parsedBody);
      const jsonObject = {};
      for (const [key,value] of params.entries()){
        jsonObject[key] = value;
      }
      const jsonString = JSON.stringify(jsonObject);
      console.log(jsonObject);
      // console.log(jsonString);
      fs.writeFileSync('Yogesh.txt', jsonString);
    });
    
  }
  res.setHeader('Location', '/');
  // 302 is the status code for redirection
  res.statusCode = 302;
    
  return res.end();

});

const PORT = 3000;

server.listen(PORT, () => {
  console.log('Server is running at port 3000');
});