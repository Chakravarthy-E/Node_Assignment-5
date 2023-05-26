const http = require("http");

const PORT = 8081;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plaine");

  if (req.url === "/welcome") {
    res.statusCode = 200;
    res.end("Welcome to Dominos! ");
  } else if (req.url === "/contact") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guescaredominos@jublfood.com",
      })
    );
  }
  else {
    res.statusCode = 404
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
