const express = require('express');
const router = express.Router();
const isAuth = require('../middelware/isAuth');
const Circuit = require('../Models/Circuits');
const isGuid = require('../middelware/isGuid');
const User = require('../Models/Users');
const config = require("config");
const { validator, circuitRules } = require('../middelware/validator');

//--------------------------------------------------------------

//@route :   GET api/circuits/
//@desc  :   Get all circuits
//@acces :   Public

router.get('/', async (req, res) => {
    try {
        const circuits = await Circuit.find().populate('user', ["name", "avatar"]);
        res.json(circuits);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//--------------------------------------------------------------

//@route :   GET api/circuits/:cir_id
//@desc  :   Get circuit by id
//@acces :   private

router.get('/:cir_id', isAuth, async (req, res) => {
    try {
        let circuit = await Circuit.findById(req.params.cir_id).populate('user', ["name", "avatar"]);
        if (!circuit) {
            return res.status(400).json({ msg: 'Circuit Not Found...' })
        }
        res.json(circuit);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//--------------------------------------------------------------

//@route :   Post api/circuits/
//@desc  :   Creation or update circuit
//@acces :   Private

router.post('/', validator, circuitRules(), isGuid, async (req, res) => {

    const {
        description,
        title,
        places,
        city,
    } = req.body;

    // built circuit object
    const circuitFields = {};
    if (description) circuitFields.description = description;
    if (title) circuitFields.title = title;
    if (city) circuitFields.city = city;
    if (places) {
        circuitFields.places = places.split(',').map(place => place.trim());
    }

    try {
        //Find existing circuit and updated
        let circuit = await Circuit.findOne({ title: circuitFields.title, city: circuitFields.city });
        if (circuit) {
            //Update user circuit
            circuit = await Circuit.findOneAndUpdate({ _id: circuit._id }, { $set: circuitFields }, { new: true, $upsert: true });
            return res.json(circuit)
        }
        // Create a new circuit
        circuit = new Circuit(circuitFields);
        await circuit.save();
        res.json(circuit)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});

//-------------------------------------------------------------------------------------   

//@route :   Delete api/ciruits/
//@desc  :   Delete  a profile, user & posts
//@acces :   Private

// router.delete('/:user_id', isAdmin, async (req, res) => {
//     try {
//         //Remove Profile
//         await Profile.findOneAndRemove({ user: req.params.user.id });
//         //Remove User
//         await User.findOneAndRemove({ _id: req.params.user.id });
//         //Remove Posts
//         res.json({ msg: 'User Deleted....' });
//     }
//     catch (error) {
//         console.error(error.message);
//         if (error.kind == 'ObjectId') {
//             return res.status(400).json({ msg: 'Profile Not Found...' })
//         }
//         res.status(500).send('Server Error')

//     }
// });

module.exports = router;