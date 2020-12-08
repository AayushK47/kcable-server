const { Customer } = require('../model/Customer');
const { Connections } = require('../model/Connections');
const { Payments } = require('../model/Payments');
const crud = require('../utils/crud');

async function getCustomers(req, res) {
    const data = await Customer.find({operator: req.userData._id}, {mob_no: 0, address: 0, area: 0}).populate('connections');
    res.json(
        {
            message: 'Success',
            data
        }
    )
}

async function createPayment(req, res) {
    const connection = await crud.readOneById(Connections, req.body.customer_id);
    console.log(req.body);
    const data = await crud.create(Payments, req.body)

    if(!connection.payments) {
        connection.payments = []
    }

    connection.payments.push(data._id);

    connection.save();
    res.json({message: "Payment added"});
}

module.exports = {
    getCustomers,
    createPayment
}