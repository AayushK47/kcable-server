const crud = require('../utils/crud');
const { Customer } = require('../model/Customer');
const { Connections } = require('../model/Connections');

async function fetchAllCustomers(req, res) {
    const data = await crud.readAll(Customer, 'connections');
    
    res.json(data);
}

async function createCustomer(req, res) {
    try{
        let data = await crud.createMany(Connections, req.body.connections);
        data = data.map(e => e._id);

        req.body.connections = data;
        data = await crud.create(Customer, req.body);
        
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

async function updateCustomer(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    var newConnections = [];

    if(req.body.connections.length > 0){
        const connection = await crud.createMany(Connections,req.body.connections);
        newConnections = connection.map(e => e._id);
    }

    // const customer = await crud.readOneById(Customer, req.params.id, '');
    const customer = await Customer.findById(req.params.id);


    customer.name = req.body.name
    customer.mob_no = req.body.mob_no
    customer.address = req.body.address
    customer.area = req.body.area

    customer.connections = [...customer.connections, ...newConnections];

    const data = await customer.save();

    console.log(`data: ${data}`);

    res.status(204).json({
        message: "Update successful",
        data: data
    });
}

module.exports = {
    fetchAllCustomers,
    createCustomer,
    updateCustomer
}