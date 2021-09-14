const express = require("express")
const app= express();

// Load routes
const management = require('./routes/management')
const user = require('./routes/user')
const healthCheck = require('./routes/management')

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/management/',management)
app.use('/api/',user)
app.use('/',healthCheck)

module.exports=app

