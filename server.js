const express = require('express');
const path = require('path');
const app = express();

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/history1', (req, res) => {
	res.sendFile(path.join(__dirname+'/history1.html'));
});

app.get('/history2', (req, res) => {
	res.sendFile(path.join(__dirname+'/history2.html'));
});

app.get('/history3', (req, res) => {
	res.sendFile(path.join(__dirname+'/history3.html'));
});

app.listen(3000, () => {
	console.log('server is running on', 3000);
});

module.exports = app;
