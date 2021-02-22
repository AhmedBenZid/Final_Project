const express = require('express');
const router = express.Router();
const { validator, registerRules, loginRules } = require('../middelware/validator');
const User = require('../Models/Users');
const bcryte = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const isAuth = require('../middelware/isAuth');
const gravatar = require('gravatar');
const isAdmin = require('../middelware/isAdmin')


//@route :   Post api/user
//@desc  :   Register User
//@acces :   Public
router.post('/register', registerRules(), validator, async (req, res) => {

    const { firstName, lastName, password, role, userPic } = req.body;

    try {
        const email = req.body.email.toLowerCase()
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        };

        const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
        if (userPic) {
            user = new User({
                firstName, lastName, email, password, userPic, role
            });
        }
        user = new User({
            firstName, lastName, email, password, avatar, role
        });

        const salt = await bcryte.genSalt(10);
        user.password = await bcryte.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,
            config.get("jwtToken"),
            { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.send({ msg: "User Registred..", token, user });
            })

    } catch (error) {
        console.error(error.message);
        res.status(400).send('Server Error')
    }
});

//@route :   Post api/user/auth
//@desc  :   Authenicate User & get token
//@acces :   Public
router.post('/auth', validator, loginRules(), async (req, res) => {

    const { password } = req.body;
    const email = req.body.email.toLowerCase()
    try {

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        };

        const isMatch = await bcryte.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        };

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,
            config.get("jwtToken"),
            { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token, user });
            })

    } catch (error) {
        console.error(error.message);
        res.status(400).send('Server Error')
    }

});

//@route :   PUT api/user/
//@desc  :   Modifier user Information without e-mail
//@acces :   Private

router.put('/', isAuth, async (req, res) => {

    let newUser = req.body;
    if (newUser.password) {
        const salt = await bcryte.genSalt(10);
        return newUser.password = await bcryte.hash(req.body.password, salt);
    }
    try {
        const user = await User.findOneAndUpdate({ _id: req.user.id }, { $set: newUser }, { new: true });
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(400).send('Server Error')
    }
});

//@route :   GET api/user/auth
//@desc  :   Get logged user
//@acces :   private
router.get('/auth', isAuth, async (req, res) => {
    try {
        await res.status(200).send({ user: req.user })
    } catch (error) {
        res.status(500).send('Server Error')
    }
});

//@route :   GET api/user/all
//@desc  :   Get all users except Admin
//@acces :   private

router.get('/all', isAdmin, async (req, res) => {
    try {
        const users = await User.find({ role: { $ne: "admin" } }).select({ password: 0 });
        await res.status(200).send(users)
    } catch (error) {
        res.status(500).send('Server Error')
    }
})
module.exports = router;