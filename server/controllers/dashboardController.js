const Transaction = require("../models/Transaction");

const getDashboard = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.id,
    });

    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
      if (t.type.toLowerCase() === "income") {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
      totalTransactions: transactions.length,
      recentTransactions: transactions.slice(0, 5),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};