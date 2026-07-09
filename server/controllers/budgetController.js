const Budget = require("../models/Budget");

const addBudget = async (req, res) => {
  try {
    const budget = await Budget.create({
      user: req.user.id,
      category: req.body.category,
      limit: req.body.limit,
      month: req.body.month,
    });

    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({
      user: req.user.id,
    });

    res.json(budgets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBudget,
  getBudgets,
};