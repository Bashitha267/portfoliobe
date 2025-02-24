const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    description: {
        type: String,
        required: [true, "description required"]
    },
    image: {
        type: String,
        required: [true, "image is required"]
    }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
