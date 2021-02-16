const { body, validationResult } = require('express-validator');

//---------------- Register Rules-------------//

const registerRules = () => [
    body('firstName', 'First Name is required').notEmpty(),
    body('lastName', 'Last name is required').notEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'Password must contain 8 characters').isLength({
        min: 8,
        max: 20,
    }),
];

//---------------- Profile Rules-------------//

const profileRules = () => [
    body('description', 'Description is required').notEmpty(),
    body('languages', 'Languages is required').notEmpty(),
    body('city', 'City is required').notEmpty(),
    body('country', 'Country is required').notEmpty(),
    body('dateOfBirth', 'Date of Birth is required').isDate({ format: 'DD-MM-YYYY' })
];

//---------------- Login Rules-------------//

const loginRules = () => [
    body('email', 'email is required').isEmail(),
    body('password', 'Password must contain 8 characters').isLength({
        min: 8,
        max: 20,
    }),
];

//---------------- Gallery Rules-------------//

const galleryRules = () => [
    body('title', 'Title is required').notEmpty(),
    body('imgUrl', 'Image Url is required').notEmpty()
];

//---------------- Destination Rules-------------//

const destinationRules = () => [
    body('title', 'Title is required').notEmpty(),
    body('description', 'Description is required').notEmpty(),
    body('city', 'City is required').notEmpty(),
    body('imgUrl', 'Image Url is required').notEmpty()
];

//---------------- Circuit Rules-------------//

const circuitRules = () => [
    body('title', 'Title is required').notEmpty(),
    body('description', 'Description is required').notEmpty(),
    body('city', 'City is required').notEmpty()
];

//---------------- Hotels Rules-------------//

const hotelsRules = () => [
    body('name', 'Hotel Name is required').notEmpty(),
];

//---------------- Validator-------------//

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors: errors.array().map((el) => ({
                msg: el.msg,
            })),
        });
    }
    next();
};


module.exports = { validator, registerRules, loginRules, profileRules, galleryRules, destinationRules, hotelsRules, circuitRules };