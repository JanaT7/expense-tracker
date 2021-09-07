const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        firstname: String,
        lastname: String,
        email: String,
        birthday: Date,
        telephone: String,
        country: String,
        password: String
    },
    'users'
);

const Create = (data) => {
    let u = new User(data);
    return u.save();
};

const GetAll = () => {
    return User.find({});
};

const GetOne = (id) => {
    return User.findOne({_id: id});
};

const GetOneByEmail = (email) => {
    return User.findOne({ email: email });
};

const Update = (id, data) => {
    return User.updateOne({_id: id}, data);
};

const Remove = (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    Create,
    GetAll,
    GetOne,
    GetOneByEmail,
    Update,
    Remove
};