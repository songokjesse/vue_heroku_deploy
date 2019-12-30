const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(/.*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, '/dist/index.html'),
  );
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

const port = process.env.PORT || 8080;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`App is listenting on port: ${port}`);
