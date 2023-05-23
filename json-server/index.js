const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');
const http = require('http');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const userFromDB = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (userFromDB) {
    return res.json(userFromDB);
  }
  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  return next();
});

server.use(router);

const httpServer = http.createServer(server);
const httpsServer = https.createServer(options, server);

const HTTP_PORT = 8000;
const HTTPS_PORT = 8443;

httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP server is running on ${HTTP_PORT} port`);
});

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server is running on ${HTTPS_PORT} port`);
});
