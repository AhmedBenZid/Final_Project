const jwt = require('jsonwebtoken');
const config = require("config")
// Require the user Schema
const User = require('../Models/Users');

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        // Check for token
        if (!token)
            return res.status(401).send({ msg: 'No Token, authorization denied' });

        const decoded = await jwt.verify(token, config.get("jwtToken"));

        // Get User from payload
        const user = await User.findOne({ _id: decoded.user.id });

        //Check for user
        if (!user) {
            return res.status(401).send({ msg: 'authorization denied' });
        }
        //Check role
        if (user.role !== "admin") {
            return res.status(401).send({ msg: 'User not authorised' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = isAdmin;