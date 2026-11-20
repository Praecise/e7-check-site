// Serves index.html on PORT. No dependencies.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const page = fs.readFileSync(path.join(__dirname, "index.html"));
const port = Number(process.env.PORT || 3000);

http.createServer((req, res) => {
  if (req.url === "/healthz") { res.writeHead(200, { "Content-Type": "text/plain" }); res.end("ok"); return; }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(page);
}).listen(port, () => console.log(`listening on ${port}`));
