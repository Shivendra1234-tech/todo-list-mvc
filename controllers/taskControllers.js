const Task = require("../models/Task");

const showHomePage = (req, res) => {
    res.render("index");
};

const createTask = async (req,res) => {
  try{
  await Task.create({
    title: req.body.task
  })

  res.redirect("/tasks");
  }
  catch(err){
    res.send(err.message);
  }
};

const getTasks = async (req, res) => {
  
  const tasks = await Task.find();
  
  res.render("tasks",{ tasks : tasks});
};

const editTask = async (req,res)=>{
   const task = await Task.findById(req.params.id);
   
   if(!task){
     return res.send("Task Not Found")
   }

   res.render("edit",{
    task
   });
};

const updatetask = async (req,res) => {
    const task =  req.body.task;
    const id =  req.body.id;

    await Task.findByIdAndUpdate(id, {
      title: task
    });

    res.redirect("/tasks");
};

const deleteTask = async (req, res)=> {
  
 const deletedTask = await Task.findByIdAndDelete(req.body.id);
  
  console.log(deletedTask);

  res.redirect("/tasks")
};

module.exports = {
  createTask,
  getTasks,
  editTask,
  updatetask,
  deleteTask,
  showHomePage
};