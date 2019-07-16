const router = require("express").Router();

const User = require("../models/usersModels");

// Login page
router.get("/login", async (req, res) => {
  res.send("login");
});

// Register page
router.get("/register", async (req, res) => {
    res.send("Register");
  });

// router.post("/register", async (req, res) => {
//     // res.send('response')
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   console.log(user)
// });

module.exports = router;
