import express from "express";

import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
	origin: true, // Укажите разрешенные домены
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("Hello World!").set({
		"Access-Control-Allow-Origin": "*",
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
