const jwt = require("jsonwebtoken")
const {users} = require("../database")
const SECRET = "jg45y398%(44*++8ybg";

// @request POST 
// @authentication notrequired
// @api /login
// @desc post request for login
const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status(404).send("User not found");
  }
  jwt.sign(req.body, SECRET, (err, token) => {
    if (err) {
      res.status(401).send("Unauthorized user");
    }
    res.status(200).json({ token });
  });
};

module.exports = {loginUser};
