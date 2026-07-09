const Transaction = require("../models/Transaction");

const getMonthlyReport = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.id,
    });

    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
      if (t.type === "income") {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      savings: income - expense,
      transactions,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMonthlyReport,
};