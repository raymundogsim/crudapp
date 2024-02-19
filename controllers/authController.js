const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userNow = await userModel.findOne({ username });
        if (!userNow) {
            res.status(404).json({ message: "User Not Found" });
        } else {
            const isPasswordValid = await bcrypt.compare(password, userNow.password);
            if (!isPasswordValid) {
                res.status(400).json({ message: "Invalid Password" });
            } else {
                const userName = req.body.username
                const user = {name: userName}
                const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1d" });
                res.status(200).json({ token, _id: userNow._id, username: userNow.username, password: userNow.password });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { loginController };
