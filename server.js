const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send('Hi, world!');
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});