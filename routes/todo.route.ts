const express = require('express');
const { TodoModel } = require('../modal/TodoModal.ts');

const todoRoutes = express.Router();


// Get All Todos  

todoRoutes.get('/', async(req: any, res: any) => {
    try{
        const todos = await TodoModel.find();
        res.status(200).send(todos);

    }catch(err){
        res.status(500).send({"error":err})
    } 
});

// Add or Create New Todo 

todoRoutes.post('/create', async(req:any,res:any)=>{
    const {title} = req.body;
    try{
        const newTodo = new TodoModel({title, status:false});
        await newTodo.save();
        res.status(201).send({"msg":"New Todo has been added","new Todo": newTodo})

    }catch(err){
        res.status(500).send({"error":err})
    }
})

/// Update perticular todo with the help of there ID

todoRoutes.patch('/update/:id', async(req:any, res:any)=>{
    const { id }= req.params;
    try{
        await TodoModel.findByIdAndUpdate({_id:id},req.body);
        res.status(201).send({"msg":`The ${id} Todo has been updated `,"new Todo":req.body })

    }catch(err){
        res.status(500).send({"error":err})
    }
})

// Delete perticular todo with the help of there ID

todoRoutes.delete('/delete/:id', async(req:any, res:any)=>{
    const { id }= req.params;
    try{
        await TodoModel.findByIdAndDelete({_id:id});
        res.status(201).send({"msg":`The ${id} Todo has been delete `})

    }catch(err){
        res.status(500).send({"error":err})
    }
})

module.exports ={ todoRoutes }
