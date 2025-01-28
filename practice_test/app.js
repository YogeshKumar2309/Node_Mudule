// const http = require('http');

// const server = http.createServer((req,res) => {
//    console.log(req.url);
//    res.setHeader('Content-Type', 'text/html');
//    res.write('<html><head><title>Oshin</title></head>');

//    if(req.url === '/'){
//       res.write('<body><navbar style="display="flex"; justity-content="space-between" border="2px solid black" background-color="rgba(143, 223, 93, 0.71);"">');
//       res.write('<a href="/home">Home</a>');
//       res.write('<a href="/men">Men</a>');
//       res.write('<a href="/woman">Woman</a>');
//       res.write('<a href="/kids">Kids</a>');
//       res.write('<a href="/cart">Cart</a>');
//       res.write('</navbar></body>');
//       return res.end();
//    }else if(req.url.toLocaleLowerCase() === "/home"){
//       res.write('<body><h1>Home</h1></body>');
//       return res.end();
//    }else if(req.url.toLocaleLowerCase() === "/men"){
//       res.write('<body><h1>Men</h1></body>');
//       return res.end();
//    }else if(req.url.toLocaleLowerCase() === "/woman"){
//       res.write('<body><h1>Woman</h1></body>');
//       return res.end();
//    }else if(req.url.toLocaleLowerCase() === "/kids"){
//       res.write('<body><h1>Kids</h1></body>');
//       return res.end();
//    }else if(req.url.toLocaleLowerCase() === "/cart"){
//       res.write('<body><h1>Cart</h1></body>');
//       return res.end();
//    }
//    res.write('</html>');
// });

// const PORT = 3000;
// server.listen(PORT, () =>{
//    console.log(`Server listen at port http://localhost:${PORT}`);
// });

const http = require('http');

const server = http.createServer((req,res) => {
   console.log(req.url,req.mothod);
   res.setHeader('Content-Type', 'text/html');
   res.write('<html><head><title>Oshin</title></head>');


   res.write(`
   <body>
      <navbar style="display="flex"; justity-content="space-between" border="2px solid black" background-color="rgba(143, 223, 93, 0.71);"">
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/woman">Woman</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>

      </navbar>
   </body>
   `);

   if(req.url === '/'){
      res.write('<body><h1>Home</h1></body>');
      return res.end();
   }else if(req.url.toLocaleLowerCase() === "/home"){
      res.write('<body><h1>Home</h1></body>');
      return res.end();
   }else if(req.url.toLocaleLowerCase() === "/men"){
      res.write('<body><h1>Men</h1></body>');
      return res.end();
   }else if(req.url.toLocaleLowerCase() === "/woman"){
      res.write('<body><h1>Woman</h1></body>');
      return res.end();
   }else if(req.url.toLocaleLowerCase() === "/kids"){
      res.write('<body><h1>Kids</h1></body>');
      return res.end();
   }else if(req.url.toLocaleLowerCase() === "/cart"){
      res.write('<body><h1>Cart</h1></body>');
      return res.end();
   }
   res.write('</html>');
   return res.end();
});

const PORT = 3000;
server.listen(PORT, () =>{
   console.log(`Server listen at port http://localhost:${PORT}`);
});
