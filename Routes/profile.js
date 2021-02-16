const express = require('express');
const router = express.Router();
const isAuth = require('../middelware/isAuth');
const Profile = require('../Models/Profiles');
const User = require('../Models/Users');
const config = require("config");
const { validator, profileRules, galleryRules } = require('../middelware/validator');
const isGuid = require('../middelware/isGuid');
const isAdmin = require('../middelware/isAdmin');

//-------------------------------------------------------------------------------------   

//@route :   GET api/Profile/me
//@desc  :   Getting user profile
//@acces :   Private

router.get('/me', isGuid, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ["firstName", "lastName", "avatar"]);

        if (!profile) {
            return res.status(400).json({ msg: "There is no profile for this user" })
        }
        res.json(profile)
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error...' })
    }

});

//-------------------------------------------------------------------------------------

//@route :   Post api/Profile
//@desc  :   Create or update the user profile
//@acces :   Private

router.post('/', validator, profileRules(), isGuid, async (req, res) => {

    const {
        description,
        street,
        zipCode,
        city,
        country,
        languages,
        car,
        loge,
        dateOfBirth,
        rate
    } = req.body;

    // built profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (description) profileFields.description = description;
    if (car) profileFields.car = car;
    if (loge) profileFields.loge = loge;
    if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
    if (rate) profileFields.rate = rate;
    if (languages) {
        profileFields.languages = languages.split(',').map(lang => lang.trim());
    }
    //Build social object
    profileFields.adresse = {};
    if (street) profileFields.adresse.street = street;
    if (zipCode) profileFields.adresse.zipCode = zipCode;
    if (city) profileFields.adresse.city = city;
    if (country) profileFields.adresse.country = country;

    try {
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            //Update user profile
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true, $upsert: true });
            return res.json(profile)
        }
        // Create a new user profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});

//-------------------------------------------------------------------------------------   

//@route :   GET api/Profile/user/:user_id
//@desc  :   Get profile by user_id
//@acces :   Public

router.get('/user/:user_id', isAuth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['firstName', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'Profile Not Found...' })
        }
        res.json(profile);
    }
    catch (error) {
        console.error(error.message);
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile Not Found...' })
        }
        res.status(500).send('Server Error')

    }
});

//-------------------------------------------------------------------------------------   

//@route :   Delete api/Profile/
//@desc  :   Delete  a profile, user & posts
//@acces :   Private

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        //Remove Profile
        await Profile.findOneAndRemove({ user: req.params.id });
        //Remove User
        await User.findOneAndRemove({ _id: req.params.id });
        //Remove Posts
        res.json({ msg: 'User Deleted....' });
    }
    catch (error) {
        console.error(error.message);
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile Not Found...' })
        }
        res.status(500).send('Server Error')

    }
});

//-------------------------------------------------------------------------------------   

//@route :   PUT api/Profile/gallery
//@desc  :   Add profile Gallery
//@acces :   Private

router.put('/gallery', validator, galleryRules(), isGuid, async (req, res) => {

    const { title, imgUrl, comment } = req.body;
    const newImg = {
        title, imgUrl, comment
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        profile.gallery.unshift(newImg);
        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});

//-------------------------------------------------------------------------------------  

//@route :   Delete api/Profile/gallery/:img_id
//@desc  :  Delete image from profile
//@acces :   Private

router.delete('/gallery/:img_id', isGuid, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        //Get the remove index
        const removeIndex = profile.gallery.map(item => item.id).indexOf(req.params.img_id);
        profile.gallery.splice(removeIndex, 1);
        await profile.save();
        res.send(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});

//-------------------------------------------------------------------------------------  



module.exports = router;
