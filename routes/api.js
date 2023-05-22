const express = require("express");
const router = express.Router();

router.use("/post", require("./api/post"));
router.use("/autor", require("./api/autor"));

module.exports = router;
