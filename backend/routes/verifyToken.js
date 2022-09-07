const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				res.status(403).json("Token is not valid");
			}
			req.user = user;
			next();
		});
	} else {
		res.status(401).json("You are not authenticated");
	}
};

const verifyTokenAndAuthourization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to peprform the operation!");
		}
	});
};

const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to peprform the operation!");
		}
	});
};

module.exports = { verifyToken, verifyTokenAndAuthourization, verifyTokenAndAdmin };
