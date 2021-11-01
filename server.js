const express = require('express');
const server = express();

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})