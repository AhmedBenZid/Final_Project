const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circuitSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    places: {
        type: [String],
    },
    city: {
        type: String,
        required: true
    },
    gallery: [
        {
            title: {
                type: String,
                required: true
            },
            imgUrl: {
                type: String,
                required: true
            },
            comment: {
                type: String,
            }
        }
    ],
    dateCreation: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = Circuit = mongoose.model('circuits', circuitSchema);