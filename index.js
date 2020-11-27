const app = require('express')();

app.get('/api/', (req, res) => {
    res.json({
        message: 'Hello there'
    });
});

app.listen(process.env.PORT || 5000,() => {
    console.log(`App started and listening on port ${process.env.port || 5000}`)
})