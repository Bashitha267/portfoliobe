const mongoose = require('mongoose');

const achi = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    link: {
        type: String,
        required: [true, "link required"]
    },
    image: {
        type: String,
        required: [true, "image is required"]
    }
});

const Achieve = mongoose.model('Achievements', achi);

module.exports = Achieve;
