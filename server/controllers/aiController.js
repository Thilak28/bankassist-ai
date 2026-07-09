const Transaction = require("../models/Transaction");
function getChargeReason(description) {
  const text = description.toLowerCase();

  if (text.includes("sms"))
    return "SMS Alert Charges";

  if (text.includes("annual") || text.includes("debit card"))
    return "Annual Debit Card Charges";

  if (text.includes("maintenance"))
    return "Account Maintenance Charges";

  if (text.includes("atm"))
    return "ATM Withdrawal Charges";

  if (text.includes("imps"))
    return "IMPS Transfer Charges";

  if (text.includes("neft"))
    return "NEFT Transfer Charges";

  if (text.includes("rtgs"))
    return "RTGS Transfer Charges";

  if (text.includes("emi"))
    return "Loan EMI";

  return "General Expense";
}
const getInsights = async (req, res) => {
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

    let insights = [];

transactions.forEach((t) => {
  if (t.type === "expense") {
    insights.push(
      `₹${t.amount} debited - ${getChargeReason(t.description)}`
    );
  }
});

if (expense > income * 0.7) {
  insights.push("⚠️ Your expenses are very high compared to your income.");
}

if (income > expense) {
  insights.push(
    `✅ Great! You saved ₹${income - expense} this month.`
  );
}

if (transactions.length === 0) {
  insights.push("No transactions available.");
}

    res.json({
      income,
      expense,
      savings: income - expense,
      insights,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getInsights };