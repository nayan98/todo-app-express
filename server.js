const express = require('express');
const connection = require('./model/connection');

connection().catch(err=>{
    console.log("error");
});

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes for handling all operations
const router = require('./routes');
app.use('/todo',router);


app.listen(port, () => console.log(`Todo app listening on port 3000!`));

