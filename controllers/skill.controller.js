const Skill=require('../models/skill.model')
const addSkill = async (req, res) => {
    try {
        const { title, description, image } = req.body;

        if (!title || !description || !image) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newSkill = await Skill.create({ title, description, image });
        res.status(201).json({ message: "Skill added successfully" });
    } catch (error) {
        console.error("Error adding skill:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

const getSkill=async(req,res)=>{
    try{
        const skill=await Skill.find()
        res.json(skill).status(201)
    }catch(e){
        res.json(e)
    }
}
exports.addSkill=addSkill;
exports.getSkill=getSkill;