const express = require("express");
const server = express();
const connstring = process.env.DATABASE_URL || dbURI;
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

const blogposts = require("./modules/blogposts.js");




// middleware ---------------------------
server.use(express.static("public"));
server.use(express.json());


server.use(blogposts);

// general error handling ------
server.use(function (err,req, res, next){
	res.status(500).json({
		error: 'Something went wrong on the server!',
		descr: err
	}).end();
});

// start server ------------------------
server.listen(server.get("port"), function () {
	
});

