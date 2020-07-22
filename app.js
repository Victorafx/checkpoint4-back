const express = require('express')
const app = express()
const connection = require('./conf');
const { json } = require('express');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/projects', (req, res) => {
  connection.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      res.status(500).send('Error server');
    } else {
      res.json(results);
    }
  });
});

app.get('/projects/:id', (req, res) => {
  const projectsId = req.params.id;
  connection.query('SELECT * FROM projects WHERE id = ?', [projectsId], (err, results) => {
    if (err) {
      res.status(500).send('Error server');
    } else if (results[0] === undefined) {
      res.status(404).send("Project not found")
    } else {
      res.json(results);
    }
  });
});

app.get('/languages', (req, res) => {
  connection.query('SELECT * FROM languages', (err, results) => {
    if (err) {
      res.status(500).send('Error server');
    } else {
      res.json(results);
    }
  });
});

app.get('/languages/:id', (req, res) => {
  const languagesId = req.params.id;
  connection.query('SELECT * FROM languages WHERE id = ?', [languagesId], (err, results) => {
    if (err) {
      res.status(500).send('Error server');
    } else if (results[0] === undefined) {
      res.status(404).send("Language not found")
    } else {
      res.json(results);
    }
  });
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})