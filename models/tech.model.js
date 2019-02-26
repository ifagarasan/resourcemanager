const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TechSchema = new Schema({
    name: { type: String, required: true },
    label: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model('Tech', TechSchema);