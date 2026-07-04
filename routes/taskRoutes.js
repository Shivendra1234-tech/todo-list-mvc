const express = require("express");
const router =  express.Router();
const Task = require("../models/Task");
const taskController = require("../controllers/taskControllers");

router.get("/", taskController.showHomePage);

// About Route
router.get("/about",(req,res) => {
  res.send("This is about page!");
});

//Task Route
router.get("/tasks", taskController.getTasks);

// Submit Route
router.post("/submit",  taskController.createTask);

//Edit Route
router.get("/edit/:id", taskController.editTask );

//Update Route
router.post("/update", taskController.updatetask);

//Delete Route
router.post("/delete",taskController.deleteTask);

module.exports = router;
