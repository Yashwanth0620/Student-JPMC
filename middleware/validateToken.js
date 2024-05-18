const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    req.token = req.headers.authorization.split(" ")[1];
    next();
}

module.exports = {validateToken};
