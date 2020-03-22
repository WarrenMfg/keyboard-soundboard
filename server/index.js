const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// API
app.get('/default', (req, res) => {
  fs.readdir(path.resolve(__dirname, '../libraries'), (err, libraries) => {
    if (err) {
      console.log('error at server/index.js app.get api/default 1st readdir', err);
    } else {
      fs.readdir(path.resolve(__dirname, '../libraries/drums'), (err, soundFiles) => {
        if (err) {
          console.log('error at server/index.js app.get api/default 2nd readdir', err);
        } else {
          res.send({ libraries, soundFiles });
        }
      });
    }
  });
});

app.get('/library/:library', (req, res) => {
  const library = req.params.library;

  fs.readdir(path.resolve(__dirname, `../libraries/${library}`), (err, soundFiles) => {
    if (err) {
      console.log('error at server/index.js app.get api/library/:library readdir', err);
    } else {
      res.send({ library, soundFiles });
    }
  });
});

app.get('/libraries/*', (req, res) => { // for script:src
  const url = req.url.split('/');
  const folder = url[2];
  const sound = url[3];
  // const file = fs.createReadStream(path.resolve(__dirname, `../libraries/${folder}/${sound}`));
  res.set({ 'Cache-Control': 'max-age=86400' });
  // file.pipe(res);
  res.sendFile(path.resolve(__dirname, `../libraries/${folder}/${sound}`));
});


// STATIC
app.use('/favicon', express.static(path.resolve(__dirname, '../favicon'), { maxAge: 86400}));

app.get('/vinyl.jpg', (req, res) => {
  const image = fs.createReadStream(path.resolve(__dirname, '../client/vinyl.jpg'));
  res.set({ 'Content-Encoding': 'gzip' });
  image.pipe(zlib.createGzip()).pipe(res);
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