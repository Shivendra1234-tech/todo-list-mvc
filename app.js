const express = require("express");
const app = express();
//const Task = require("./models/Task.js");
const taskRoutes = require("./routes/taskRoutes");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
// .then(() => {
//   console.log("MongoDB is connected");
// })
// .catch((err) => {
//   console.log(err);
// });

// const taskSchema = new mongoose.Schema({
//   title:{
//   type:String,
//   trim: true,
//   required: true,
//   minlength: 3,
//   maxlength: 100
//   } 
// });

// const Task  = mongoose.model("Task", taskSchema);

//const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(taskRoutes);

app.set("view engine","ejs");

const port = 8080;

// let tasks = [];

// Root Route
// app.get("/", (req, res) => {
//   //console.log("Request received!");
// //  res.sendFile(path.join(__dirname,"index.html"));
//     res.render("index");
// });

// // About Route
// app.get("/about",(req,res) => {
//   res.send("This is about page!");
// });

//Task Route
// app.get("/tasks", async (req, res) => {
//   // let listItems = "";
//   // tasks.forEach((task=> {
//   //   listItems += `<li>${task}</li>`;
//   // }));
  
//   // console.log(listItems);
//   const tasks = await Task.find();
  
//   res.render("tasks",{ tasks : tasks});
// });

// // Submit Route
// app.post("/submit",  async (req,res) => {
//   try{
//   await Task.create({
//     title: req.body.task
//   })

//  // console.log(tasks);

//   res.redirect("/tasks");
//   }
//   catch(err){
//     res.send(err.message);
//   }
// });

// //Edit Route
// app.get("/edit/:id", async (req,res)=>{
//    const task = await Task.findById(req.params.id);
   
//    if(!task){
//      return res.send("Task Not Found")
//    }

//    res.render("edit",{
//     task
//    });
// });

// //Update Route
// app.post("/update", async (req,res) => {
//     const task =  req.body.task;
//     const id =  req.body.id;

//     await Task.findByIdAndUpdate(id, {
//       title: task
//     });

//     res.redirect("/tasks");
// });

// //Delete Route
// app.post("/delete",async (req, res)=> {
  
//  const deletedTask = await Task.findByIdAndDelete(req.body.id);
  
//   console.log(deletedTask);

//   res.redirect("/tasks")
// })

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});