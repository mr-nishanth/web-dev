const mongoose = require('mongoose')

// Create a new instance of mongoose Schema
const TaskSchema = new mongoose.Schema({
    todo: String,
    isCompleted: Boolean
})

// 
const Task = mongoose.model("task", TaskSchema)

module.exports = Task