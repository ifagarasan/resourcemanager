const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TechSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String },
    tags: { type: String }
});

module.exports = mongoose.model('Tech', TechSchema);