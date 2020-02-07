const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
    date: { type: Date, default: Date.now},
    user: { type: String, required: true },
    humidity: { type: Number, required: true },
    temperature: { type: Number, required: true },
    gps: { type: String, required: true },
    sensor: { type: String, required: true }
});

module.exports = mongoose.model('Pets', petSchema);