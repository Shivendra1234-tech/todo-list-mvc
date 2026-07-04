const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => {
  console.log("MongoDB is connected");
})
.catch((err) => {
  console.log(err);
});

const taskSchema = new mongoose.Schema({
  title:{
  type:String,
  trim: true,
  required: true,
  minlength: 3,
  maxlength: 100
  } 
});

const Task  = mongoose.model("Task", taskSchema);

module.exports = Task;

