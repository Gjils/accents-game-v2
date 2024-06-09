import express from "express";

import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
	origin: true, // Укажите разрешенные домены
	credentials: true,
};

app.use(cors(corsOptions));

app.get("/", cors(), (req, res) => {
	res.json({ msg: "Hello World!" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
