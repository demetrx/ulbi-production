const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  return next();
});

server.use(jsonServer.defaults());
server.use(router);

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

server.listen(8000, () => {
  console.log('Server is running on 8000 port');
});
