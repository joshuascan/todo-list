const Users = require("../users/users-model");

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
};
