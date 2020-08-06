const mongoose = require('mongoose');
module.exports = ()=>
    mongoose.connect('mongodb+srv://nayan98:todoapp@cluster0.zd1zp.mongodb.net/todoapp', {useNewUrlParser: true, useUnifiedTopology: true});

