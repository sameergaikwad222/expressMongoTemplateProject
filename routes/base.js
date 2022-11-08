const express = require("express");
const router = express.Router();
const BaseModel = require("../models/baseModel");

router.get("/", (req, res) => {
  res.status(200).json({ error: "false", message: "Base Api Started" });
});
router.get("/base", (req, res) => {
  res.status(200).json({ error: "false", message: "Base Hit" });
});

module.exports = router;
