const server = require('./api/server');
require('dotenv').config();

const port = process.env.PORT || 5005;

server.listen(port, () => {
  console.log(` \n ** Listening on port:${port} ** \n `);
});