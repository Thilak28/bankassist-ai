function extractTransactions(text) {
  const lines = text.split("\n").map(line => line.trim());

  const transactions = [];
  let current = "";

  for (const line of lines) {
    if (/^\d{2}-[A-Z]{3}-\d{4}/.test(line)) {
      if (current !== "") {
        transactions.push(parseTransaction(current));
      }
      current = line;
    } else {
      if (current !== "") {
        current += " " + line;
      }
    }
  }

  if (current !== "") {
    transactions.push(parseTransaction(current));
  }

  return transactions;
}

function parseTransaction(description) {

  // Date
  const dateMatch = description.match(/^\d{2}-[A-Z]{3}-\d{4}/);

  // DR or CR
  let type = "";

  if (/\bDR\b/.test(description) || /\/DR\//.test(description)) {
    type = "DR";
  } else if (/\bCR\b/.test(description) || /\/CR\//.test(description)) {
    type = "CR";
  } else if (/DEBIT/i.test(description)) {
    type = "DR";
  } else if (/CREDIT/i.test(description)) {
    type = "CR";
  }

  // Amount after TRF
  const amountMatch = description.match(/TRF(\d+(?:\.\d+)?)/i);

  return {
    date: dateMatch ? dateMatch[0] : "",
    type,
    amount: amountMatch ? amountMatch[1] : "0",
    description
  };
}
module.exports = extractTransactions;