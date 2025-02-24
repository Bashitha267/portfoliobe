const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

const ProductDetails = mongoose.model('Product', productSchema);

module.exports = ProductDetails;
