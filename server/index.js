const server = require('./app');

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`Server is listening on http://localhost:${3000}`));
