const db = require("../models");

const ActivityModel = db.activityGroup;
const Joi =  require('joi');

exports.GetAllActivity =  (req,res)=>{
    try{
        ActivityModel
            .findAll()
            .then((data)=>{ 
                if(data.length == 0){
                    res.status(200).json({status : "Not Found", message : "Data not found", data : []})
                }else{
                    res.status(200).json({status : "Success", message : "Success" ,data })
                }})
            .catch((error)=>{
                throw new Error(error.message)
            })
    }catch(error){
        res.status(500).json({status : 'Error', message : error.message})
    }
}

exports.GetOneActivity =  (req,res)=>{
    try{
        ActivityModel
            .findOne({where : {id : req.params.id}})
            .then((data)=>{ 
                res.status(200).json({status : "Success", message : "Success" ,data : {} })
            })
            .catch((error)=>{
                throw new Error(error.message)
            })
    }catch(error){
        res.status(500).json({status : 'Error', message : error.message})
    }
}

exports.DeleteOneActivity =  (req,res)=>{
    try{
        ActivityModel
            .destroy({where : {id : req.params.id}})
            .then((data)=>{ 
                res.status(200).json({status : "Success", message : "Success" ,data })
            })
            .catch((error)=>{
                throw new Error(error.message)
            })
    }catch(error){
        res.status(500).json({status : 'Error', message : error.message})
    }
}

exports.AddDataActivity =  (req,res)=>{
    try{
        const schema = Joi.object().keys({
            email : Joi.string().email().required(),
            title : Joi.string().required()
        })

        const validation =  schema.validate(req.body);

        if(validation.error !=  null){
            throw new Error("Missing Required Data")

        }else{
            ActivityModel
            .create(req.body)
            .then((data)=>{ 
                res.status(200).json({status : "Success", message : "Success", data })
            })
            .catch((error)=>{
                throw new Error(error.message)
            })
        }
        
    }catch(error){
        res.status(500).json({status : 'Error', message : error.message})
    }
}

exports.UpdateDataActivity =  (req,res)=>{
    try{
        const schema = Joi.object().keys({
            title : Joi.string().required()
        })

        const validation =  schema.validate(req.body);

        if(validation.error !=  null ){
            throw new Error("Missing Required Data")

        }else{
            ActivityModel
            .update(req.body,{where : {id : req.params.id}})
            .then((_)=>{ 
                ActivityModel.findOne({where : {id : req.params.id}}).then((data)=>{
                    res.status(200).json({status : "Success", message : "Success", data })
                })
            })
            .catch((error)=>{
                throw new Error(error.message)
            })
        }
        
    }catch(error){
        res.status(500).json({status : 'Error', message : error.message})
    }
}

