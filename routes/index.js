const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("welcome");
});

module.exports = router;
