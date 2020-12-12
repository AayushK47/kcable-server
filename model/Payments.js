const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    payment_date: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    }
});

const Payments = mongoose.model('Payments', PaymentSchema);

module.exports = {
    Payments
}