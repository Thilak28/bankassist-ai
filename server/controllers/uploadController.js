const path = require("path");

const parsePDF = require("../utils/pdfParser");
const parseCSV = require("../utils/csvParser");
const parseExcel = require("../utils/excelParser");
const analyzeTransaction= require("../utils/transactionAnalyzer");
const extractTransactions = require("../utils/extractTransactions");
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }
    const extension = path.extname(req.file.originalname).toLowerCase();
let extractedData;

if (extension === ".pdf") {
  extractedData = await parsePDF(req.file.path);
} 
else if (extension === ".csv") {
  extractedData = await parseCSV(req.file.path);
} else if (extension === ".xlsx") {
  extractedData = parseExcel(req.file.path);
} else {
  return res.status(400).json({
    message: "Unsupported file type",
  });
}
const transactions = extractTransactions(extractedData);

const analyzedTransactions = transactions.map((item) => ({
  ...item,
  analysis: analyzeTransaction(item.description),
}));
// ✅ Validate whether it is a bank statement
const text = extractedData.toLowerCase();

const keywords = [
  "account",
  "balance",
  "statement",
  "transaction",
  "debit",
  "credit"
];

const isBankStatement = keywords.some(word => text.includes(word));

if (!isBankStatement) {
  return res.status(400).json({
    message: "Please upload a valid bank statement."
  });
}
console.log("========== RAW PDF ==========");
console.log(extractedData.substring(0, 5000));
console.log("========== END ==========");
console.log("Transactions:");
console.log(analyzedTransactions);
// ✅ Success response
  res.status(200).json({
  message: "Statement uploaded successfully",
  file: req.file.filename,
  transactions: analyzedTransactions,
});

  } 
  catch (error) {
  console.log("========== UPLOAD ERROR ==========");
  console.error(error);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack);

  res.status(500).json({
    message: error.message,
  });
}
};

module.exports = { uploadFile };