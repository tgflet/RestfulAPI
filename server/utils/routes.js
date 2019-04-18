const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get('/task', Tasks.getAll);
    app.post('/task', Tasks.create);
    app.get('/task/:_id', Tasks.getOne);
    app.delete('/task/:_id',Tasks.delete);
    app.put('/task/:_id', Tasks.update);
}