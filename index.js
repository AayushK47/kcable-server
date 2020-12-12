const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { auth } = require('./middleware/auth');
const customerRouter = require('./routes/customers');
const authRouter = require('./routes/auth');
const paymentsRouter = require('./routes/payments');
const dashboardRouter = require('./routes/dashboard');

app.use(bodyParser.json());
app.use(cors());
app.use(authRouter);
app.use(auth);
app.use(customerRouter);
app.use(paymentsRouter);
app.use(dashboardRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    }).then(() => {
        console.log('Connected to mongo');
        app.listen(process.env.PORT || 5500,() => {
            console.log(`App started and listening on port ${process.env.port || 5500}`)
        })
    }).catch(err => {
        console.log(err);
    });