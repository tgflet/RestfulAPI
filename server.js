const express = require("express"),
    DB_NAME = "ToDo",
    path = require("path"),
    bp = require("body-parser"),
    port = 8000,
    app = express(),
    cors = require('cors');

app.use(bp.json());
const react_path = path.join(__dirname, './client/build');
app.use(express.static(react_path));
app.use(cors());
require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => {
    console.log(`Listing on port: ${port}`);
});