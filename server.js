const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videosData = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server
});

server.get('/', (req, res) => {
  return res.render('about');
});

server.get('/tutorials', (req, res) => {
  return res.render('tutorials', { items: videosData });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});