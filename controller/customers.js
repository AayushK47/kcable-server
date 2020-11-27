const { Customer } = require('../model/Customer');
const crud = require('../utils/crud');

async function fetchAllCustomers(req, res) {
    const data = await crud.readAll(Customer);
    
    res.json(data);
}

async function createCustomer(req, res) {
    const data = await crud.create(Customer, req.body);
    res.json({message: "success", data});
}

module.exports = {
    fetchAllCustomers,
    createCustomer
}