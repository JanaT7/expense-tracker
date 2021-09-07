const UserValidator = require('../pkg/validator');
const UserModel = require('../pkg/users');
const bcrypt = require('bcryptjs');


const login = async (req, res) => {
    let v = await UserValidator.Validate(req.body, UserValidator.UserLoginSchema);
    if (!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    let user = await UserModel.GetOneByEmail(req.body.email);
    if (user) {
        let pwd = bcrypt.compareSync(req.body.password, user.password);
        if (!pwd) {
            console.log('User not found');
            res.status(403).send('Forbidden');
        } else {
            // user successfully logged in
            console.log('user successfully logged in');
            return res.status(200).send(user);
        }
    } else {
        console.log('User not found');
        res.status(404).send('Not found');
    }
};

module.exports = {
    login
};