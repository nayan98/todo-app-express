const todoModel = require('../model/todoModel');

module.exports.homepage= (req,res)=>{
    res.render('index');
};

module.exports.getTasks= (req,res)=>{
    const result = todoModel.getTasks().then(result=>{
        res.json(result);
    });
    console.log(result);
   
};

module.exports.saveTask = (req,res)=>{
    const item = req.body.task;
    todoModel.saveTask(item);

    res.send("added");
}

module.exports.deleteTask = (req,res) =>{
    let item = req.params.item;
    todoModel.deleteTask(item);
    res.send(item);

    
}