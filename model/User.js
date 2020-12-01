const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    org_name: {
        type: String,
        required: true
    }
});

const User = mongoose.Model('User', UserSchema);

module.exports = {
    User
}