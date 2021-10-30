const router = require("express").Router();
const Auth = require("./auth-model");
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");

router.post("/register", (req, res, next) => {
  let user = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;

  Auth.add(user)
    .then((newUser) => {
      res.status(201).json({
        message: `Account successfully created. Welcome ${newUser.username}!`,
        newUser,
      });
    })
    .catch(next);
});

module.exports = router;
