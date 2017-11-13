var connection = require('./connection.js');

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	},

	update: function(tableInput, condition, cb){
		connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';',
			function(err,result){
				if(err)throw err;
				cb(result);
			})
	},

	create: function(tableInput,val,cb){
		connection.query('INSERT INTO ' +tableInput+ " (burger_name) VALUES ('"+val+"');",
		function(err,result){
			if(err)throw err;
			cb()
		})
	}
}

module.exports = orm;

/*
Must use a Node and Express Web Server

Must be backed by a MySQL Database with a Sequelize ORM  

Must have both GET and POST routes for retrieving and adding new data

Must incorporate Basic Testing Framework 

Must be deployed using Heroku (with Data)

Must utilize at least one new library, package, or technology that we haven’t discussed

Must have a polished frontend / UI 

Must have folder structure that meets MVC Paradigm

Must meet good quality coding standards (indentation, scoping, naming)

*/