/*
GET /listAllHubs 
GET /hubs
----------------------------------------------------------
GET /createHub?name=nymane
POST /hubs {name=myname}
----------------------------------------------------------
GET /updateHub?id=3&name=mynewname
PUT /hubs/3 {name=mynewname}
*/

const server = require('./server');

server.listen(3000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
