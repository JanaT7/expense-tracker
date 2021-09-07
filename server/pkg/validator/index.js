const {Validator} = require('node-input-validator');

const UserCreationSchema = {
    firstname: 'required',
    lastname: 'required',
    email: 'required|email',
    password: 'required'
};

const UserLoginSchema = {
    email: 'required|email',
    password: 'required'
};
const ProductCreationSchema = {
    product_name: 'required',
    product_description: 'required',
    product_type: 'required',
    purchase_date: 'required|dateFormat:DD-MM-YYYY',
    product_price: 'required'
}

const Validate = (data, schema) => {
    let v = new Validator(data, schema);
    return v.check();
};

module.exports = {
    UserCreationSchema,
    UserLoginSchema,
    ProductCreationSchema,
    Validate
};