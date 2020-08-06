const mongoose = require('mongoose');
module.exports = ()=>
{
    const URI = "mongodb+srv://nayan98:todoapp@cluster0.zd1zp.mongodb.net/todoapp"
   return mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
}

