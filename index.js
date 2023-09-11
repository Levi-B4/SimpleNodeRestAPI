//import routes
import routes from "./routes/routes.js";
//Import packages
import bodyParser from "body-parser";
import express from "express";
//set port
const port = 3002;
const app = express();

//parses request into a JSON object
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
//handle requests
routes(app);
//handle errors
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
		console.log(`Server listening on port ${server.address().port}`);
});