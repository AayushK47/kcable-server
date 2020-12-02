const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../model/User');
const crud = require('../utils/crud');

async function signup(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const data = await crud.create(
        User,
        {
            username: req.body.username,
            password: hashedPassword,
            org_name: req.body.org_name
        }
    );

    const token = jwt.sign({_id: data.id, username: req.body.username}, process.env.JWT_SECRET, { expiresIn: "14d" });

    res.json({
        message: "User Created",
        userId: data.id,
        token
    });
}

async function login(req, res){

    const data = await crud.readOne(User, { username: req.body.username });

    if(!data){
        res.status(404).json({
            message: "Username not found. Please try again with the correct credentials",
        });
    } else {
        const isValid = await bcrypt.compare(req.body.password, data.password);

        if(!isValid){
            res.status(401).json({
                message: "Invalid password. Please try again"
            });
        } else {
            const token = jwt.sign({userId: data.id, username: req.body.username}, process.env.JWT_SECRET, { expiresIn: "14d" });
            res.status(200).json({
                message: "Login successful",
                token
            });
        }
    }
}

module.exports = {
    signup,
    login
}