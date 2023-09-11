const users = [
	{
		id: 1,
		name: "Levi Butler",
		email: "levi44b@gmail.com",
	},
	{
		id: 2,
		name: "Adam Adams",
		email: "adamsqrd@yahoo.com",
	},
];


const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API",
		});
	});
	
	app.get("/users", (request, response) => {
		response.send(users);
	});
};
export default router;