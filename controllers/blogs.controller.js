const blogs = require("../models/blogs.model");

const addBlog = async (req, res) => {
    try {
        const blog = new blogs(req.body); 
        await blog.save(); 
        res.status(201).json({ message: "Blog added successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message }); 
    }
};

const getblogs = async (req, res) => {
    try {
        const blogList = await blogs.find();
        res.status(200).json(blogList);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.addBlog = addBlog;
exports.getblogs = getblogs;
