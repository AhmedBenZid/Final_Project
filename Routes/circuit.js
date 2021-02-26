const express = require('express');
const router = express.Router();
const isAuth = require('../middelware/isAuth');
const isAdmin = require('../middelware/isAdmin');
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
        const circuits = await Circuit.find().populate('user', ['firstName', 'lastName', 'languages']);
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
        let circuit = await Circuit.findById(req.params.cir_id);
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
        destination,
        price
    } = req.body;

    // built circuit object
    const circuitFields = {};
    circuitFields.user = req.user.id
    if (description) circuitFields.description = description;
    if (title) circuitFields.title = title;
    if (destination) circuitFields.destination = destination;
    if (price) circuitFields.price = price;
    if (places) {
        circuitFields.places = places.split(',').map(place => place.trim());
    }

    try {
        //Find existing circuit and updated
        let circuit = await Circuit.findOne({ title: circuitFields.title, destination: circuitFields.destination });
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
//@desc  :   Delete  a circuit
//@acces :   Private

router.delete('/:cirId', isAdmin, async (req, res) => {
    try {
        await Circuit.findByIdAndDelete(req.params.cirId)
    }
    catch (error) {
        console.error(error.message);
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Circuit Not Found...' })
        }
        res.status(500).send('Server Error')

    }
});

module.exports = router;