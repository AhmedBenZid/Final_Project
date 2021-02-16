const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const distinationSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    rate: Number,
    hotels: [
        {
            name: {
                type: String,
                required: true
            },
            rate: Number,
            location: String,
            link: String
        }
    ]
});

module.exports = Distination = mongoose.model('distinations', distinationSchema);