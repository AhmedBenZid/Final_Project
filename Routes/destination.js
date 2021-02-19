const express = require('express');
const router = express.Router();
const isAdmin = require('../middelware/isAdmin');
const { validator, destinationRules, hotelsRules } = require('../middelware/validator');
const Destination = require('../Models/Destinations');

//--------------------------------------------------------------

//@route :   GET api/destinations/
//@desc  :   Get all destinations
//@acces :   Public

router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find().sort({ rate: -1 });
        res.json(destinations);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//--------------------------------------------------------------

//@route :   Get api/destinations/:dest_id
//@desc  :   Get destination by id
//@acces :   Public

router.get('/:des_id', async (req, res) => {
    const { des_id } = req.params;
    try {
        const destination = await Destination.findById(des_id);
        if (!destination) {
            return res.status(400).json({ msg: 'Destination Not Found...' })
        }
        res.json(destination);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//--------------------------------------------------------------

//@route :   Post api/destinations/
//@desc  :   Creation or update destination
//@acces :   Private

router.post('/', validator, destinationRules(), isAdmin, async (req, res) => {

    const {
        description,
        title,
        city,
        imgUrl,
        rate
    } = req.body;

    // built destination object
    const destinationFields = {};
    if (description) destinationFields.description = description;
    if (title) destinationFields.title = title;
    if (city) destinationFields.city = city;
    if (rate) destinationFields.rate = rate;
    if (imgUrl) destinationFields.imgUrl = imgUrl;

    try {
        //Find existing destination and updated
        let destination = await Destination.findOne({ title: destinationFields.title, city: destinationFields.city });
        if (destination) {
            //Update user destination
            destination = await Destination.findOneAndUpdate({ _id: destination._id }, { $set: destinationFields }, { new: true, $upsert: true });
            return res.json(destination)
        }
        // Create a new destination
        destination = new Destination(destinationFields);
        await destination.save();
        res.json(destination)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});

//--------------------------------------------------------------

//@route :   Delete api/destinations/:des_id
//@desc  :   Delete a destination by id
//@acces :   Private

router.delete('/remove/:des_id', isAdmin, async (req, res) => {
    try {
        await Destination.findByIdAndRemove(req.params.des_id);
        res.json({ msg: "Destination deleted..." });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
});

// //-------------------------------------------------------------------------------------   

// //@route :   PUT api/destinations/hotels
// //@desc  :   Add hotels to destinations
// //@acces :   Private

// router.put('/hotels/:des_id', validator, hotelsRules(), isAdmin, async (req, res) => {

//     const { name, rate, location, link } = req.body;
//     const newHotel = {
//         name, rate, location, link
//     }
//     try {
//         const destination = await Destination.findById(req.params.des_id);
//         console.log(destination.hotels)
//         destination.hotels.push(newHotel);
//         destination.save()
//         res.json(destination)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error")
//     }
// });

// // //-------------------------------------------------------------------------------------  

// // //@route :   Delete api/Profile/hotels/:hotel_id
// // //@desc  :  Delete hotel from destination
// // //@acces :   Private

// router.delete('/hotels/:hotel_id', isAdmin, async (req, res) => {
//     try {
//         const destination = await Destination.findOne({ _id: req.params.hotel_id });
//         //Get the remove index
//         const removeIndex = destination.hotels.map(item => item.id).indexOf(req.params.hotel_id);
//         destination.hotels.splice(removeIndex, 1);
//         await destination.save();
//         res.send(destination)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error")
//     }
// });




module.exports = router;