const mongoose = require('mongoose');
const schema = mongoose.Schema;
const todoTaskSchema = new schema({
    task:String
});
const todoTask = mongoose.model('todoTasks',todoTaskSchema);
module.exports = todoTask; 
