const express = require("express");
const { getWaveAPI } = require("../controller/wave");
const cors = require("cors");

const router = express.Router();

router.get("/", cors(), getWaveAPI);

module.exports = router;
