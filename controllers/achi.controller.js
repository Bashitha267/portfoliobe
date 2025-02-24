const achi=require('../models/achi.model')

const addAchi=async(req,res)=>{
    try{
        const achiData=new achi(req.body)
        await achiData.save()
        res.status(201).json({message:"Achievement Added Successfully"})
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
}

const getAchi=async(req,res)=>{
    try{
        const achiData=await achi.find()
        res.status(200).json(achiData)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}
exports.addAchi=addAchi;
exports.getAchi=getAchi;