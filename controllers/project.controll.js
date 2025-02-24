const project=require('../models/project.model')

const getProjects=async(req,res)=>{
    try{
         
    const projects=await project.find()
    res.json(projects).status(201)
    }
    catch(e){
        console.log(e)
    }
   
}
const addprojects=async(req,res)=>{
    try{
        const setProjects=await project.create(req.body)
        res.json("Project Added Successfully").status(201)
    }
    catch(e){
        console.log(e)
    }
}

exports.addProjects=addprojects;
exports.getProjects=getProjects