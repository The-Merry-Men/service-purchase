//  connect js file to mysql database
const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fec_robinhood',
});

connection.connect(() => {
  console.log('fec-robinhood database connected');
});

function generateData() {
  for (let i = 1; i < 100; i += 1) {
    const name = faker.company.companyName();
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ticker = '';
    for (let j = 0; j < 4; j += 1) {
      ticker += possible[Math.floor(Math.random() * 26)];
    }
    const price = Math.random() * 300 + 1;
    const queryStringPrice = 'INSERT INTO prices (id, current_price) VALUES (?, ?)';
    const queryStringCompany = 'INSERT INTO companies (id, company_name, ticker_symbol) VALUES (?, ?, ?)';
    connection.query(queryStringCompany, [i, name, ticker], (err) => {
      if (err) {
        console.log(err);
      }
    });
    connection.query(queryStringPrice, [i, price], (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

// generate a single user's data
const queryStringUser = 'INSERT INTO users (id, balance, authorized_user) VALUES (?, ?, ?)';
connection.query(queryStringUser, [1, 10000, 1]);

generateData();
connection.end();
