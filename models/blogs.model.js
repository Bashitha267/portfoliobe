const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
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

const Blogs = mongoose.model('Blogs', blogsSchema);

module.exports = Blogs;
