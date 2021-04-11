const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')
const {validate} = require('../validators')

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await User.findOne({where:{email}});
        
        if (!user) {
            return res.status(404).json({ message:"User not found!"});
        }

        if (!bcrypt.compareSync(password, user.password) ) {
            return res.status(401).json({ message:"Invalid credentials!"});
        }

        const userWithToken = generateToken(user.get({ raw:true }));
        return res.send(userWithToken)

    } catch (e) {
        return res.status(500).send("Internal Server Error")

    }
    return res.status(400).send("l-ai futut")

}

exports.register = async (req, res) => {

    const { email } = req.body

    try {

        const test = await User.findOne({where:{email}});
        
        if (test) {
            return res.status(404).json({ message:"User is already registered!"});

        }
        user = await User.create(req.body);

        const userWithToken = generateToken(user.get({ raw:true }));
        return res.send(userWithToken)


    } catch (e) {
        console.log(e);
        return res.status(500).send("Internal Server Error")
    }
}

const generateToken = (user) => {
    delete user.password

    const token = jwt.sign(user, config.appKey, {expiresIn: 86400})

    return { ...user, ...{token}}
}