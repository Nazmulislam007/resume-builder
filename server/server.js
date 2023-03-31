const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const PORT = 4000;

server.use(middleware);
server.use(router);

server.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});
