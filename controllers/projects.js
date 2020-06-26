const express =require('express')
const projectController = express.Router()
const mongoose = require('mongoose')
const Project = require('../models/projects.js')


//////Index route////////
projectController.get('/', (req,res)=>{
   Project.find({}, (error, allProjects)=> {
       res.render('Index',{
           projects:allProjects
       });
   });
});
/////New Route//////
projectController.get('/new', (req, res)=>{
    res.render('New');
});
// //////Seed Route///////
// projectController.get('/seed', (req,res)=> {
//     Project.create([

//         {
//             title:"CES Shop",
//             code: "https://github.com/chrisungerjs/project_3_frontend",
//             deployment: "https://ces-store.netlify.app/",
//             image: "https://github.com/ehall0/Emma_Hall_Portfolio/blob/master/Screenshot_2020-06-26_17-43-42.png?raw=true",
//             description:"Mock e-commerce shop with user login/ admin login, and shopping cart, made with express and react"
//         },
//         {
//             title:"Goal Tracker",
//             code: "https://github.com/ehall0/Goal_Tracker",
//             deployment: "https://emmahall-project2.herokuapp.com/goals/",
//             image: "https://github.com/ehall0/Emma_Hall_Portfolio/raw/master/Screenshot_2020-06-26_17-42-26.png",
//             description:"Track your goals easily by sorting them by daily/monthly/yearly goals. Users have the ability to login and edit/delete/create goals on their tracker. Users can also view which goals are complete or in progress, as well as a total completion percentage."
//         },
//         {
//             title:"Math Mountain",
//             code: "https://github.com/ehall0/Math_Mountain",
//             deployment: "https://ehall0.github.io/Math_Mountain/",
//             image: "https://github.com/ehall0/Math_Mountain/raw/master/Screenshot_2020-05-06_14-58-52.png",
//             description:"A simple math game meant for a young audencience looking to improve their basic math skills while having fun! Whoever answers all questions first will reach the top of the mountain first!"
//         }
//     ], (error, newProjects) => {
//         res.redirect('/projects')
//     })
// })

///////Delete Route//////

projectController.delete('/:id',(req,res) =>{
   Project.findByIdAndRemove(req.params.id,(err, data)=> {
       res.redirect('/projects')
   })

})

//////Portfolio Route//////
projectController.get('/portfolio',(req,res) => {
    Project.find({}, (error, allProjects)=> {
        res.render('Projects',{
            projects:allProjects
        });
    });
})

//////Edit//////
projectController.get('/edit/:id', (req,res) => {
   Project.findById(req.params.id , (error, foundProject)=> {
        res.render('Edit', {project : foundProject});
    })
});


/////////////////////////
////Functional Routes////
/////////////////////////
////Create Route////
projectController.post('/', (req, res)=>{
    Project.create(req.body, (error, createdProject)=> {
        if(error){
            show(error)
        }else{
            res.redirect('/projects')
        }
    })
});

////Update Route/////
projectController.put('/edit/:id', (req,res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/projects');
    });
});

///////////

//Export
module.exports =projectController;