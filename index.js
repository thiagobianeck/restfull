const express = require('express');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

const app = express();

app.use(routesIndex);
app.use('/users',routesUsers);

app.listen(3000, ()=> {

    console.log('servidor rodando');

});
