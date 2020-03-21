const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// API



// STATIC
app.use('/favicon', express.static(path.resolve(__dirname, '../favicon'), { maxAge: 86400000}));

app.get('/vinyl.jpg', (req, res) => {
  const image = fs.createReadStream(path.resolve(__dirname, '../client/vinyl.jpg'));
  res.set({ 'Content-Encoding': 'gzip' });
  image.pipe(zlib.createGzip()).pipe(res);
});

app.get('/sounds/*', (req, res) => {
  const sound = req.url.split('/')[2];
  const file = fs.createReadStream(path.resolve(__dirname, `../sounds/${sound}`));
  file.pipe(res);
});

app.get('/bundle.js', (req, res) => {
  const bundle = fs.createReadStream(path.resolve(__dirname, '../client/bundle.js'));
  res.set({ 'Content-Encoding': 'gzip' });
  bundle.pipe(zlib.createGzip()).pipe(res);
});

app.get('/', (req, res) => {
  const html = fs.createReadStream(path.resolve(__dirname, '../client/index.html'));
  res.set({ 'Content-Encoding': 'gzip' });
  html.pipe(zlib.createGzip()).pipe(res);
});

const PORT = 50000;
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));