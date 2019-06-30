const express = require('express');

const app = express();



app.get('/', (req, res) => {


	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Olá</h1>');
});


app.get('/users', (req, res) => {

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.json({
		users: [{
			name: 'Hcode',
			email: 'contato@hcode.com.br',
			id: 1
		}]
	});

});


app.listen(3000, ()=> {

    console.log('servidor rodando');

});
