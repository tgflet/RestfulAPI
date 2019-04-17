const mongoose = require("mongoose");
const Task = mongoose.model("Task");

class Tasks{
    getAll(req, res){
        Task.find({}, (err, tasks)=>{
            if(err){
                console.log(err);
            }
            res.json({status: "ok", tasks: tasks});
        });
    }
    getOne(req, res){
        Task.find( { _id: req.params._id}, (err, task) => {
            if(err){
                console.log(err);
            }
            res.json({status:"ok", task: task});
        })
    }
    create(req, res){
        let task = Task(req.body);
        task.save( (err)=> {
            if(err){
                res.json({status: "not ok", valid: false, errors: err});
            }else{
                res.json({staus:"ok", valid: true});
            }
        });
    }
    delete(req, res){
        Task.remove({_id: req.params._id}, (err)=>{
            if(err){
                console.log(err);
            }
            res.json({status:"ok"})
        });
    }
    update(req, res){
        Task.updateOne({_id: req.params._id}, {$set: req.body}, (err)=>{
            if(err){
                console.log(err);
            }
            res.json({status:"ok"})
        });
    }
}
module.exports = new Tasks();