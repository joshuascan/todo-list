const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");
const Users = require("../users/users-model");

async function checkUsernameUnique(req, res, next) {
  try {
    const existing = await Users.findBy({
      username: req.body.username,
    }).first();
    if (existing) {
      next({ status: 422, message: "This username is taken already." });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

async function checkUsernameExists(req, res, next) {
  try {
    const existing = await Users.findBy({
      username: req.body.username,
    }).first();
    if (!existing) {
      next({ status: 404, message: "User not found" });
    } else {
      req.validUser = existing;
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkUsernameExists,
  checkUsernameUnique,
};
