const Transaction = require("../models/Transaction");
const addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      user: req.user.id,
      type: req.body.type,
      category: req.body.category,
      amount: req.body.amount,
      description: req.body.description,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getTransactions = async (req, res) => {
  try {
    console.log("Logged in User ID:", req.user.id);

    const transactions = await Transaction.find({
      user: req.user.id,
    }).sort({ date: -1 });

    console.log("Transactions:", transactions);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    transaction.type = req.body.type || transaction.type;
    transaction.category = req.body.category || transaction.category;
    transaction.amount = req.body.amount || transaction.amount;
    transaction.description =
      req.body.description || transaction.description;

    await transaction.save();

    res.json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//  const Transaction = require("../models/Transaction");

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    await transaction.deleteOne();

    res.json({
      message: "Transaction deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
};
