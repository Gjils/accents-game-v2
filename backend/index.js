import express from "express";

import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
	origin: ["http://89.169.54.5"], // Укажите разрешенные домены
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/api/test", (req, res) => {
	res.send("ОНО РАБОТАЕТ!!!!!!!");
});

app.listen(port, () => {
	console.log(`Hello World!`);
});
