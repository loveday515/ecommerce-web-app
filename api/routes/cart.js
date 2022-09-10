const router = require("express").Router();
const Cart = require("../models/Cart");
const {
	verifyTokenAndAdmin,
	verifyTokenAndAuthourization,
	verifyToken,
} = require("./verifyToken");

// CREATE CART
router.post("/", verifyToken, async (req, res) => {
	const newCart = new Cart(req.body);

	try {
		const savedCart = await newCart.save((error) => {
			if (error) {
				console.log(error);
			}
		});
		res.status(200).json(savedCart);
	} catch (error) {
		res.status(500).json(error);
	}
});

//UPDATE CART
router.put("/:id", verifyTokenAndAuthourization, async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedCart);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE CART
router.delete("/:id", verifyTokenAndAuthourization, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json("Cart has been deleted");
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthourization, async (req, res) => {
	try {
		const cart = await Cart.findOne(req.params.id);
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET ALL PRODUCTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
