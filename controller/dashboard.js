const mongoose = require('mongoose');
const { Customer } = require('../model/Customer');

async function getCustomersWithDuedate(req, res) {
    let docs = await Customer.aggregate([
        { $match:  { operator: mongoose.Types.ObjectId(req.userData._id) } },
        { $lookup: {
            from: 'connections',
            localField: 'connections',
            foreignField: '_id',
            as: 'connections'
          },
        },
        { $unwind: { path: '$connections' } },
        { 
            $lookup: {
                from: 'payments',
                localField: 'connections.payments',
                foreignField: '_id',
                as: 'payments'
            } 
        },
        {
            $project: {
                name: 1,
                stb_no: "$connections.stb_no",
                mob_no: 1,
                area: 1,
                payment_date: '$payments.payment_date',
                due_date: '$payments.due_date'
            }
        },
    ]);

    for(let doc of docs) {
        if(doc.payment_date.length > 0){
            doc.payment_date = doc.payment_date[doc.payment_date.length - 1]
        }
        if(doc.due_date.length > 0){
            doc.due_date = doc.due_date[doc.due_date.length - 1]
        }
    }

    docs = docs.filter(x => x.payment_date.length > 0);

    res.json({
        message: "got here",
        docs
    })
}

module.exports = {
    getCustomersWithDuedate
}