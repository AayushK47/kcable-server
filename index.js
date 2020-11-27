const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const customerRouter = require('./routes/customers');

app.use(bodyParser.json());
app.use(customerRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    }).then(() => {
        console.log('Connected to mongo');
        app.listen(process.env.PORT || 5000,() => {
            console.log(`App started and listening on port ${process.env.port || 5000}`)
        })
    }).catch(err => {
        console.log(err);
    });