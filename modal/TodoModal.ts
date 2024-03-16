const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title : {type:String, required:true},
    status: {type:Boolean, required:true},
    // userId : {type:String, required:true}
},{
    versionKey:false
  }
);

const TodoModel = mongoose.model('todo', todoSchema);

module.exports = { TodoModel }