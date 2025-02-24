
const express=require('express')
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
const { addSkill, getSkill } = require('./controllers/skill.controller')
const { addProjects, getProjects } = require('./controllers/project.controll')
const { addBlog, getblogs } = require('./controllers/blogs.controller')
const { getAchi, addAchi } = require('./controllers/achi.controller')
// middleware
app.use(express())
app.use(cors())
app.use(express.json())
console.log("Hello")
app.use(express.urlencoded({extended:false}));




app.listen(3000,()=>{
    console.log("running on 3000")
})
console.log("hello")



// mongoDB connection
mongoose.connect("mongodb+srv://nimeshspc2k17:yi2OALzdmuELllC1@portfolio.icrtl.mongodb.net/?retryWrites=true&w=majority&appName=portfolio")
  .then(() => console.log('Connected!'))
  .catch((error)=>{
    console.log(error);
  })

  // mongoose.connect('mongodb+srv://Rest123:myrest456@rest.0zotr.mongodb.net/?retryWrites=true&w=majority&appName=Rest')
  // .then(()=>console.log('connected!'))
  // .catch((err)=>console.log(err))


  // api

  app.post('https://api.render.com/deploy/srv-cuu7qo0gph6c73abb500?key=MTITh8c-4us/addskill',addSkill);
  app.get('https://api.render.com/deploy/srv-cuu7qo0gph6c73abb500?key=MTITh8c-4us/getskills',getSkill)
  app.post('/addproject',addProjects)
  app.get('/getprojects',getProjects)
  app.post('/addblogs',addBlog)
  app.get('/getblogs',getblogs)
  app.get('/getachi',getAchi)
  app.post('/addachi',addAchi)
