
// CONNECT TO DATABASE
const mysql = require('mysql');
const cors = require('cors');


const connection = mysql.createConnection({
  host: 'service-purchase2.cb172hej5beh.us-west-1.rds.amazonaws.com',
  user: 'root',
  password: 'rootpassword',
  database: 'fec_robinhood',
});

connection.connect(() => {
  console.log('fec-robinhood database connected');
});

// API
const express = require('express');

const port = 3001;
const app = express();
app.use(cors());
app.listen(port, () => {
  console.log('server up and running');
});

// get company name from companies table given id
app.get('/purchase/companies/:id', (req, res) => {
  const idParam = req.params.id;
  const queryString = 'SELECT ticker_symbol from companies WHERE id= ?';
  connection.query(queryString, idParam, (err, data) => {
    if (err) {
      console.log('error getting company name from companies database');
    }
    res.send(data[0]);
  });
});

app.use('/client', express.static('client'));
app.use(express.static('public'));
