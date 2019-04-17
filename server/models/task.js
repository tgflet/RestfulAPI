const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {type: String, required: [true, "Please Enter a Task"],
        minLength: [2, "How Descriptive Can you Really be with just two Characters?"]},
    completed : {type: Boolean, default: false}
},{timestamps: true});

mongoose.model('Task', TaskSchema);