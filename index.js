const express = require('express');
const consign = require('consign');


let app = express();

consign()
    .include('routes')
    .into(app);


app.listen(3000, ()=> {
    console.log('servidor rodando');
});
