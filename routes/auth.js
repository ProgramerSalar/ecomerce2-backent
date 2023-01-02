const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controllers
const { createorUpdateUser, currentUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createorUpdateUser);
router.post("/create-user", authCheck, currentUser);

module.exports = router;
