const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'html');

nunjucks.configure('views', {
  express: server
});

server.get('/', (req, res) => {
  return res.render('about');
});

server.get('/tutorials', (req, res) => {
  return res.render('tutorials');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});