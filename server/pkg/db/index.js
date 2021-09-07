const mongoose = require('mongoose');
const config = require('../config');

let username = config.Get('db').username;
let password = config.Get('db').password;
let dbname = config.Get('db').dbname;
let host = config.Get('db').host;

mongoose.connect(
    `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
    });