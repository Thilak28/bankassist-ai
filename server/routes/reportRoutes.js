const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { getMonthlyReport } = require("../controllers/reportController");

router.get("/", protect, getMonthlyReport);

module.exports = router;