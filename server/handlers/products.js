const ProductModel = require('../pkg/products');

const getAll = async (req, res) => {
    try {
        let us = await ProductModel.GetAll(req.params.id);
        return res.status(200).send(us);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const create = async (req, res) => {
    try {
        let us = await ProductModel.Create(req.body);
        res.status(201).send(us);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

const remove = async (req, res) => {
    try {
        await ProductModel.Remove(req.params.id);
        res.status(204).send('Success')
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};


module.exports = {
    getAll,
    create,
    remove
};