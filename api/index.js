require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const port = process.env.PORT || 5000;

mongoose
	.connect(`${process.env.MONGO_URL}`)
	.then(() => {
		console.log("DB Connection Successful");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(cors());
app.use(express.json());

app.use("/api/v0/auth", authRoute);
app.use("/api/v0/users", userRoute);
app.use("/api/v0/products", productRoute);
app.use("/api/v0/carts", cartRoute);
app.use("/api/v0/orders", orderRoute);
app.use("/api/v0/checkout", stripeRoute);

app.listen(`${port}`, (err) => {
	if (err) {
		console.log("ERROR", err);
	}
	console.log(`backend server started successfully on ${port}`);
});
