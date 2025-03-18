const mongoose = require('mongoose');

const foundItemSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    location: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['lost', 'found'], required: true }
});

module.exports = mongoose.model('FoundItem', foundItemSchema);
