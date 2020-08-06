const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
module.exports = ()=>
{
    const URI = "mongodb+srv://"
    +process.env.DB_USER
    +":"
    +process.env.DB_PASSWORD
    +"@cluster0.zd1zp.mongodb.net/"
    +process.env.DB_NAME;
    //console.log(URI);
   return mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
}

