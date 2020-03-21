const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// API



// STATIC
app.get('/bundle.js', (req, res) => {
  const html = fs.createReadStream(path.resolve(__dirname, '../client/bundle.js'));
  res.set({ 'Content-Encoding': 'gzip' });
  html.pipe(zlib.createGzip()).pipe(res);
});

app.get('/', (req, res) => {
  const html = fs.createReadStream(path.resolve(__dirname, '../client/index.html'));
  res.set({ 'Content-Encoding': 'gzip' });
  html.pipe(zlib.createGzip()).pipe(res);
});

const PORT = 50000;
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));