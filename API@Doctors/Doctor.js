const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorID: {
        type: Number,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [/.+@.+\..+/, 'Please fill a valid email address'] // Simple email validation
    },
    address: {
        type: String,
        required: true
    },
    experienceYears: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Doctor', doctorSchema);

