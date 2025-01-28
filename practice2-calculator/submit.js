

const submit= (req,res) => {
  console.log(req.url, req.method);
  
  const body = [];
  req.on("data", (chunk) => {
    // console.log(chunk);
    body.push(chunk);

  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);

    const params = new URLSearchParams(fullBody);
    const jsonObject = Object.fromEntries(params);
    console.log(jsonObject);

    const result = Number(jsonObject.firstNo) + Number(jsonObject.secondNo);
    console.log(result);

  });

  return res.end();
}

module.exports.submit = submit;