const UserModel = require('../pkg/users');
const UserValidator = require('../pkg/validator');
const bcrypt = require('bcryptjs');


const create = async (req, res) => {
    let v = await UserValidator.Validate(req.body, UserValidator.UserCreationSchema);
    if (!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    let u = await UserModel.GetOneByEmail(req.body.email);
    if (u != null) {
        console.log('user validation error');
        return res.status(400).send('Bad request [user exists]');
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    try {
        let us = await UserModel.Create(req.body);
        res.status(201).send(us);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    create
};