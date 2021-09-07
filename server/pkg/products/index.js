const mongoose = require('mongoose');

const Product = mongoose.model(
    'Product',
    {
        product_name: String,
        product_description: String,
        product_type: String,
        purchase_date: Date,
        product_price: Number
    },
    'products'
);
const Create = (data) => {
    let p = new Product(data);
    return p.save();
};

const GetAll = () => {
    return Product.find({});
};

const GetOne = (id) => {
    return Product.findOne({_id: id});
};

const Update = (id, data) => {
    return Product.updateOne({_id: id}, data);
};

const Remove = (id) => {
    return Product.deleteOne({_id: id});
};

module.exports = {
    Create,
    GetAll,
    GetOne,
    Update,
    Remove
};