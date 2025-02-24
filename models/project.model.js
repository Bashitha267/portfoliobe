const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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

const ProjectDetails = mongoose.model('Projects', projectSchema);

module.exports = ProjectDetails;
