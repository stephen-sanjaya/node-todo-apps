const db = require("../models");

const Joi =  require('joi');
const todoItemsModel = require("../models/todoItems.model");
const TodoItemsModel = db.todoItems;

exports.GetAllTodoItems =  (req,res)=>{
    try{
        TodoItemsModel
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

exports.GetOneTodoItems =  (req,res)=>{
    try{
        TodoItemsModel
            .findOne({where : {id : req.params.id}})
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

exports.DeleteOneTodoItems =  (req,res)=>{
    try{
        TodoItemsModel
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

exports.AddDataTodoItems =  (req,res)=>{
    try{
        const schema = Joi.object().keys({
            activity_group_id : Joi.number().integer().required(),
            priority_level_id : Joi.number().integer(),
            title : Joi.string().required(),
            
        })

        const validation =  schema.validate(req.body);

        if(validation.error !=  null){
            throw new Error("Missing Required Data")
        }else{
            TodoItemsModel
                .create({
                    title : req.body.title,
                    activityGroupId : req.body.activity_group_id
                })
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

exports.UpdateDataTodoItems =  (req,res)=>{
    try{
        const schema = Joi.object().keys({
            is_active : Joi.boolean().required()
        })

        const validation =  schema.validate(req.body);

        if(validation.error !=  null ){
            throw new Error("Missing Required Data")

        }else{
            TodoItemsModel
                .update(req.body,{where : {id : req.params.id}})
                .then((_)=>{ 
                    TodoItemsModel.findOne({where : {id : req.params.id}}).then((data)=>{
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

