const express = require("express");
const getDetailsController = require("../controller/get-info");
const router = express.Router();
router.get("/", getDetailsController.getDetails);
module.exports = router;
