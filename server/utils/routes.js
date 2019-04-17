const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get('/', Tasks.getAll);
    app.post('/', Tasks.create);
    app.get('/:_id', Tasks.getOne);
    app.delete('/:_id',Tasks.delete);
    app.put('/:_id', Tasks.update);
}