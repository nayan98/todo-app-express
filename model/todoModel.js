const todoTask = require('./todoschema');

module.exports.deleteTask = (item) =>{
    item = item.replace(/-/g," ");
    console.log(item);
    todoTask.find({task:item}).then(items=>{
        for(let item1 of items){
            item1.remove().then(value=>{
                console.log(value+" removed");
            });
        }
        //console.log(result);
    })

    todoTask.remove({task:item})
    
}

module.exports.getTasks =  () =>{
    return todoTask.find({}).then(result=>result);
}

module.exports.saveTask = (item) =>{
    const task = new todoTask({
        task:item
    });
    task.save().then(()=>{
        console.log("Task Saved");
        
    })

}