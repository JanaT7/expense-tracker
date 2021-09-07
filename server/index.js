require('./pkg/db');

require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./handlers/users');
const Auth = require('./handlers/auth');
const Product = require('./handlers/products');


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/users', Users.create);
app.post('/auth/login', Auth.login);

app.post('/products/create',Product.create);
app.get('/products/:id', Product.getAll);
app.delete('/products/delete/:id', Product.remove)

app.listen(10005, err => {
    if(err) {
        return console.error(err);
    }
    console.log(`Server running on port 10005`);
});