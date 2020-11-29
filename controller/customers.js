const crud = require('../utils/crud');
const { Customer } = require('../model/Customer');
const { Connections } = require('../model/Connections');

async function fetchAllCustomers(req, res) {
    const data = await crud.readAll(Customer);
    
    res.json(data);
}

async function createCustomer(req, res) {
    try{
        let data = await crud.createMany(Connections, req.body.connections);
        data = data.map(e => e._id);

        req.body.connections = data;
        data = await crud.create(Customer, req.body)
        
        res.status(201).json({
            message: "Customer Created",
            data: data
        });
    } catch(e) {
        if(e.code === 11000) {
            res.json({message: "DUplicate data received. Cannot save the Customer", data: null});
        }
        
    }
}

module.exports = {
    fetchAllCustomers,
    createCustomer
}