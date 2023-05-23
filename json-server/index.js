const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');

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

const httpsServer = https.createServer(options, server);

httpsServer.listen(403, () => {
  console.log('Server is running on 8000 port');
});
