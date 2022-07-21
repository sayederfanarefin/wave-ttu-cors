const express = require("express");
const { getPumps } = require("../controller/pumps");
const cors = require("cors");

const router = express.Router();

router.get("/", cors(), getPumps);

module.exports = router;
