const {Client} = require('pg');

const client = new Client({
    user: 'uwu4u4i8va3exqntjk9h',
    host: 'bhngoqjvtmertadfaf6m-postgresql.services.clever-cloud.com',
    database: 'bhngoqjvtmertadfaf6m',
    password: 'mWaH5p7QtBpt7GEF9BRE',
    port: '5432'
});

client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log('Connection to Database Successful.');
    }
});

module.exports = client;