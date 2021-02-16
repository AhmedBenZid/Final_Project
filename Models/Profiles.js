const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    description: {
        type: String,
        required: true
    },
    adresse:
    {
        street: {
            type: String,
        },
        zipCode: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
    ,
    languages: {
        type: [String],
        required: true
    },
    car: {
        type: Boolean,
        default: false,
        required: true
    },
    loge: {
        type: Boolean,
        default: false,
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
    rate: {
        type: Number,
    },
    dateOfBirth: {
        type: Date,
        required: true
    }

});

module.exports = Profile = mongoose.model('profiles', profileSchema);