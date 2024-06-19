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

async function login(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email or password are incorrect");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Email or password are incorrect");
  }

  return user;
}

module.exports = {
  register,
  login,
};
