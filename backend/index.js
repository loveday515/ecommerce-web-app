const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const port = process.env.PORT || 5000;

mongoose
	.connect(`${process.env.MONGO_URL}`)
	.then(() => {
		console.log("DB Connection Successful");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());

app.use("/api/v0/auth", authRoute);
app.use("/api/v0/users", userRoute);


app.listen(`${port}`, (err) => {
	if (err) {
		console.log("ERROR", err);
	}
	console.log(`backend server started successfully on ${port}`);
});
