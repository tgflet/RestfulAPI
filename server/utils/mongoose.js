const mongoose = require("mongoose"),
    fs= require('fs'),
    path = require("path"),
    model_path = path.join(__dirname, "../models");


module.exports = function(DB_name){
    mongoose.connect(`mongodb://localhost/${DB_name}`);
    // console.log(fs.readdirSync('../models'));
    let models = fs.readdirSync(model_path);
    for(let model of models){
        require(path.join(model_path, model));
    }
    console.log(models);
    
}