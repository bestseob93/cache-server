const express = require('express');
const fs = require('fs');
const app = express();

app.get('/history1', (req, res) => {
	fs.readFile('./history1.html', (err, data) => {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(data);
	});
});

app.get('history2', (req, res) => {
	fs.readFile('./history2.html', (err, data) => {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(data);
	});
});

app.get('history3', (req, res) => {
	fs.readFile('./history3.html', (err, data) => {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(data);
	});
});

app.listen(3000, () => {
	console.log('server is running on', 3000);
});

module.exports = app;
