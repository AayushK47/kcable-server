const mongoose = require('mongoose');

const ConnectionsSchema = mongoose.Schema({
    stb_no: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: true
    },
    monthly_amt: {
        type: Number,
        required: true
    },
    payments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payments'
        }
    ]
});

const Connections = mongoose.model('Connections', ConnectionsSchema);

module.exports = {
    Connections
};