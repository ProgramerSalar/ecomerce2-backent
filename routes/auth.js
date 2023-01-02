const express = require("express");
const { authCheck } = require("../middlewares/auth");
const router = express.Router();
const { createOrUpdateUser } = require("../controllers/auth");

const myMiddleware = (req, res, next) => {
  console.log("i am middleware");
  next();
};

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.get("/testing", myMiddleware, (req, res) => {
  res.json({
    data: "you are successfully created",
  });
});

module.exports = router;
