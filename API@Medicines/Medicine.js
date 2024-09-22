const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    medicineID: {
        type: Number,
        required: true,
        unique: true
    },
    medicineName: {
        type: String,
        required: true
    },
    medicineManufacturer: {
        type: String,
        required: true
    },
    medicineCost: {
        type: Number,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    manufacturedDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
