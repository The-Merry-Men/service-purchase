CREATE DATABASE IF NOT EXISTS fec_robinhood;

USE fec_robinhood;

DROP TABLE IF EXISTS prices;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS users;

CREATE TABLE companies (
    id MEDIUMINT NOT NULL PRIMARY KEY,
    company_name VARCHAR(50),
    ticker_symbol VARCHAR(8)
);

CREATE TABLE prices (
   id MEDIUMINT NOT NULL,
   current_price DECIMAL(9, 2),
   FOREIGN KEY (id) REFERENCES companies (id)
);

CREATE TABLE users (
    id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    balance DECIMAL(12, 2),
    authorized_user TINYINT(1)
);