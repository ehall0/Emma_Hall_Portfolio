//////Set Up Express//////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const show = console.log;
const Project = require('./models/projects.js');
const methodOverride = require('method-override');
const projectsController = require('./controllers/projects.js');
require('dotenv').config()
const port = process.env.PORT || 3000;

//////Middleware///////
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true})); 
app.use(methodOverride('_method'));


/////controllers/////
app.use('/projects', projectsController);

//mongoose connection
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

db.once('open', ()=> {
    show('connected to mongo');
})



//////Listening on Port//////
app.listen(port, ()=>{
    console.log('listening on: ' + port);
});