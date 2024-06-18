const jwt = require("jsonwebtoken");

const secret = "jwt secrete";

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "2d" });
  return token;
}

function verifyToken(token) {}

module.exports = {
  createToken,
  verifyToken,
};
