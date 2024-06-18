const bcrypt = require("bcrypt");
const { User } = require("../models/user");

async function register(email, password) {
  const existing = await User.findOne({ email });

  if (existing) {
    throw new Error("Email is already used");
  }

  const user = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();

  return user;
}

module.exports = {
  register,
};
