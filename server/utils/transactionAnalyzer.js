const explanations = {
  "AMC": {
    category: "Bank Charges",
    reason: "Annual Maintenance Charges for your debit card."
  },

  "SMS": {
    category: "Bank Charges",
    reason: "SMS alert charges deducted by the bank."
  },

  "GST": {
    category: "Tax",
    reason: "GST charged on banking services."
  },

  "ATM": {
    category: "Cash Withdrawal",
    reason: "Cash withdrawn using an ATM."
  },
  "NEFT": {
    category: "Bank Transfer",
    reason: "Money transferred using NEFT."
  },

  "IMPS": {
    category: "Bank Transfer",
    reason: "Money transferred instantly using IMPS."
  },

  "RTGS": {
    category: "Bank Transfer",
    reason: "High-value transfer using RTGS."
  },

  "POS": {
    category: "Card Payment",
    reason: "Debit/Credit card swipe payment."
  },

  "CASH": {
    category: "Cash",
    reason: "Cash deposited or withdrawn."
  },

  "SALARY": {
    category: "Income",
    reason: "Salary credited."
  },

  "INTEREST": {
    category: "Income",
    reason: "Interest credited by the bank."
  },

  "CHEQUE": {
    category: "Cheque",
    reason: "Cheque transaction."
  },

  "RELIANCE": {
    category: "Shopping",
    reason: "Payment made to Reliance."
  },
  "UPI": {
  category: "UPI Payment",
  reason: "Money transferred through UPI."
},

"PAID VIA": {
  category: "UPI Payment",
  reason: "Payment made through UPI."
},

"PAYMENT": {
  category: "UPI Payment",
  reason: "Payment transaction."
},

"SAFE GOLD": {
  category: "Investment",
  reason: "Gold investment transaction."
},

  "JIO": {
    category: "Recharge",
    reason: "Mobile recharge or Jio payment."
  },

  "AMAZON": {
    category: "Shopping",
    reason: "Purchase made on Amazon."
  },

  "FLIPKART": {
    category: "Shopping",
    reason: "Purchase made on Flipkart."
  },

  "SWIGGY": {
    category: "Food",
    reason: "Food order via Swiggy."
  },

  "ZOMATO": {
    category: "Food",
    reason: "Food order via Zomato."
  },

  "UBER": {
    category: "Travel",
    reason: "Ride payment through Uber."
  },

  "OLA": {
    category: "Travel",
    reason: "Ride payment through Ola."
  },
  "ACH": {
  category: "Auto Debit",
  reason: "Automatic debit by the bank."
},

"NACH": {
  category: "Auto Debit",
  reason: "National Automated Clearing House transaction."
},

"EMI": {
  category: "Loan",
  reason: "Loan EMI payment."
},

"LOAN": {
  category: "Loan",
  reason: "Loan related transaction."
},

"FD": {
  category: "Investment",
  reason: "Fixed Deposit transaction."
},

"RD": {
  category: "Investment",
  reason: "Recurring Deposit transaction."
},

"MUTUAL FUND": {
  category: "Investment",
  reason: "Investment in Mutual Fund."
},

"SIP": {
  category: "Investment",
  reason: "Systematic Investment Plan payment."
},

"ELECTRICITY": {
  category: "Utility Bill",
  reason: "Electricity bill payment."
},

"WATER": {
  category: "Utility Bill",
  reason: "Water bill payment."
},

"GAS": {
  category: "Utility Bill",
  reason: "Gas bill payment."
},

"MOBILE": {
  category: "Recharge",
  reason: "Mobile recharge."
},

"DTH": {
  category: "Recharge",
  reason: "DTH recharge."
},

"FASTAG": {
  category: "Travel",
  reason: "FASTag recharge or toll payment."
},

"IRCTC": {
  category: "Travel",
  reason: "Railway ticket booking."
},

"MAKEMYTRIP": {
  category: "Travel",
  reason: "Travel booking."
},

"BOOKMYSHOW": {
  category: "Entertainment",
  reason: "Movie ticket booking."
},

"NETFLIX": {
  category: "Entertainment",
  reason: "Netflix subscription."
},

"SPOTIFY": {
  category: "Entertainment",
  reason: "Spotify subscription."
},

"APPLE": {
  category: "Shopping",
  reason: "Apple purchase or subscription."
},

"GOOGLE": {
  category: "Shopping",
  reason: "Google service payment."
},

"PHONEPE": {
  category: "UPI Payment",
  reason: "Payment made through PhonePe."
},

"GPAY": {
  category: "UPI Payment",
  reason: "Payment made through Google Pay."
},

"PAYTM": {
  category: "UPI Payment",
  reason: "Payment made through Paytm."
},

"CRED": {
  category: "Credit Card",
  reason: "Credit card bill payment."
},

"INSURANCE": {
  category: "Insurance",
  reason: "Insurance premium payment."
},

"LIC": {
  category: "Insurance",
  reason: "LIC premium payment."
}
};
function analyzeTransaction(description) {
    const text = description.toUpperCase();

    // Highest priority checks
    if (text.includes("DEBIT CARD AMC") || /\bAMC\b/.test(text)) {
        return explanations["AMC"];
    }

    if (text.includes("SAFE GOLD")) {
        return explanations["SAFE GOLD"];
    }

    if (
    text.includes("UPI") ||
    text.includes("PAID VIA") ||
    text.includes("PAY TO") ||
    text.includes("/UPI") ||
    text.includes("UPI/")
) {
    return explanations["UPI"];
}

    // Check all remaining keywords
    for (const keyword in explanations) {

        // Already checked above
        if (["AMC", "SAFE GOLD", "UPI", "PAID VIA", "PAYMENT"].includes(keyword)) {
            continue;
        }

        // Use word boundary for short keywords (avoids RD matching CARD)
        if (keyword.length <= 4) {
            const regex = new RegExp(`\\b${keyword}\\b`);

            if (regex.test(text)) {
                return explanations[keyword];
            }
        } else {
            if (text.includes(keyword)) {
                return explanations[keyword];
            }
        }
    }

    return {
        category: "Others",
        reason: "No explanation available."
    };
}

module.exports = analyzeTransaction;