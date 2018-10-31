
// CONNECT TO DATABASE
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fec_robinhood'
});

connection.connect(() => {
  console.log('fec-robinhood database connected');
});

// API
const express = require('express');

const port = 3001;
const app = express();
app.listen(port, () => {
  console.log('server up and running');
});

// get company name from companies table given id
app.get('/companies/:id', (req, res) => {
  const idParam = req.params.id;
  const queryString = 'SELECT company_name, ticker_symbol from companies WHERE id= ?';
  connection.query(queryString, idParam, (err, data) => {
    if (err) {
      return console.log('error getting company name from companies database');
    }
    res.send(data[0]);
  });
});

// get balance from user table given id
app.get('/users/:id', (req, res) => {
  const idParam = req.params.id;
  const queryStringBalance = 'SELECT balance, authorized_user from users WHERE id= ?';
  connection.query(queryStringBalance, idParam, (err, data) => {
    if (err) {
      return console.log('error getting account balance from companies database');
    }
    res.send(data[0]);
  });
});

// subtract amount from balance of user table give id
app.post('/users/:id/:amount', (req, res) => {
  const idParam = req.params.id;
  const amountParam = req.params.amount;
  const queryStringAmount = 'UPDATE users SET balance = balance - ? WHERE id = ?';
  connection.query(queryStringAmount, [amountParam, idParam], (err) => {
    if (err) {
      return console.log('error updating user balance');
    }
    console.log('successfully updated user balance');
  });
});

app.use('/client', express.static('client'));
app.use(express.static('public'));
