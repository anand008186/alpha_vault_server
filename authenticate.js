const jwt = require("jsonwebtoken")

const jwtKey = "my_secret_key"
const authenticate = (req, res,next) => {
	// We can obtain the session token from the requests cookies, which come with every request
	const token = req.cookies.token

	// if the cookie is not set, return an unauthorized error
	if (!token) {
		return res.status(401).end()
	}

	var payload
	try {
		payload = jwt.verify(token, jwtKey);
        next();
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			// if the error thrown is because the JWT is unauthorized, return a 401 error
			return res.status(401).end()
		}
		// otherwise, return a bad request error
		return res.status(400).end()
	}
}
module.exports = authenticate;