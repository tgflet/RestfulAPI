const express = require("express"),
    DB_NAME = "ToDo",
    bp = require("body-parser"),
    port = 8000,
    app = express();

app.use(bp.json());
require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => {
    console.log(`Listing on port: ${port}`);
});