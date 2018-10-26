//connect js file to mysql database
const mysql = require('mysql')
const faker = require('faker')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fec_robinhood'
})

connection.connect(() => {
    console.log('fec-robinhood database connected')
})

const generateData = function() {

    for (let i = 1; i < 100; i++) {
        let name = faker.company.companyName()
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let ticker = ''

        for (let i = 0; i < 4; i++) {
            ticker += possible[Math.floor(Math.random() * 26)]
        }

        let price = Math.random() * 300 + 1
        queryStringPrice = 'INSERT INTO prices (id, current_price) VALUES (?, ?)'
        queryStringCompany = 'INSERT INTO companies (id, company_name, ticker_symbol) VALUES (?, ?, ?)'

        connection.query(queryStringCompany, [i, name, ticker], (err) => {
            if (err) {
                return console.log(err)
            }
        })
        connection.query(queryStringPrice, [i, price], (err) => {
            if (err) {
                return console.log(err)
            }
        })
    }
}

generateData()
connection.end()
