const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addBudget,
  getBudgets,
} = require("../controllers/budgetController");

router.post("/", protect, addBudget);
router.get("/", protect, getBudgets);

module.exports = router;