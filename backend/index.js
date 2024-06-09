import express from "express";

import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
	origin: ["http://localhost:3000", "http://89.169.54.5"], // Укажите разрешенные домены
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
