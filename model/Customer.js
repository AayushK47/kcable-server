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
        required: true,
        lowercase: true
    },
    area: {
        type: String,
        required: true,
        lowercase: true
    },
    connections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Connections'
        }
    ],
    operator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = {
    Customer
}