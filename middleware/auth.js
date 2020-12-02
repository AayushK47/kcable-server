const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = { _id: decodedToken._id };
        next()
    } catch(err) {
        res.status(401).json({
            message: "Authorization Failed"
        })
    }
}

module.exports = {
    auth
}