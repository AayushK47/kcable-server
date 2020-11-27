const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    mob_no: {
        type: String,
        required: true,
        unique: true,
        validate: /^\d{10}$/
    },
    address: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = {
    Customer
}