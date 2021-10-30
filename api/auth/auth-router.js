const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");

router.post("/register", (req, res, next) => {
  let user = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;

  Users.add(user)
    .then((newUser) => {
      res.status(201).json({
        message: `Account successfully created. Welcome ${newUser.username}!`,
        newUser,
      });
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
    try {
        if (bcrypt.compareSync(req.body.password, req.validUser.password))
    }
});

module.exports = router;
