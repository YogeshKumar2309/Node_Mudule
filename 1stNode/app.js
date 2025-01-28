//Creating first Node Server

// const http = require('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);

// const http = require('http');

// const server = http.createServer((req,res) => {
//   console.log(req);
// });

// server.listen(3000);

// const http = require('http');

// const server = http.createServer((req,res) => {
//   console.log(req);
// });

// const PORT = 3000;
// server.listen(PORT, () =>{
//   console.log(`Server listen at http://localhost:${PORT}`);
// });

//Exit event loop

// const http = require('http');

// const server = http.createServer((req,res) =>  {
//   console.log(req);
//   process.exit();
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server listen at PORT:{Port}`);
// });

// request object

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
// });

// const PORT = 5001;
// server.listen(PORT, () => {
//   console.log(`Server listen port ${PORT}`);
// });

// Sending response

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("");
//   res.write("<head><title>Oshin</title></head>");
//   res.write("<body>");
//   res.write("<h1>Oshin is my god.</h1>");
//   res.write("</body>");
//   res.write("</html>");
//   res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server runing at port http://localhost:${PORT}`);
// });


// Routing ruquest

// const http = require('http');

// const server = http.createServer((req,res) => {
//    console.log(req.url);

//    res.setHeader('content-type','text/html');
//    res.write('<html><head><title>Oshin is my god</title></head>');

//    if(req.url === '/'){
//     res.write('<body><h1>Welcome to Home page.</h1><br><h2>Oshin is my god. also god is my god </h2></body>');
//     res.write('</html>');
//     return res.end();
//    }else if (req.url.toLowerCase() === '/product') {
//     res.write("<body><h1>Products</h1></body>");
//     res.write('</html>');
//     return res.end();
//    }

//    res.write('<body><h1>welcome to my god Oshin.</h1></body>');
//    res.write('</html>');
//    return res.end();

// });
// const PORT = 3000;

// server.listen(PORT, () =>{
//   console.log(`Server is listen in port http://localhost:${PORT}`);
// });


//Taking user input

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
   console.log(req.url);

   res.setHeader('Content-Type', 'text/html');
   res.write('<html><head><title>Oshin</title></head>');
   
   if(req.url === '/'){
    res.write('<body><h1>Welcome to Home page.</h1><form action="/submit-details" method="POST"><input type="text" id="username" name="name" placeholder="Enter your name"><br><br><label for="gender">Gender</label><br><br><input type="radio" id="male" name="gender" value="male"><lable for="male">Male</lable><input type="radio" id="female" name="gender" value="female"><lable for="female">Female</lable><br><br><button type="submit">Submit</button></form></body>');
    res.write('</html>');
  
   }
   else if (req.url.toLowerCase() === '/submit-details'   &&    req.method == 'POST'){
    fs.writeFileSync('detail.txt', 'Yogesh');
    res.statusCode = 302;
    res.setHeader('Location', '/');
   
   }


});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
