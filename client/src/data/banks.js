const banks = [
{
name: "State Bank of India (SBI)",
app: "YONO SBI",
website: "https://sbi.co.in",
miniStatement: "Missed Call: 09223866666",
sms: "SMS MSTMT to 09223866666",
whatsapp: "9022690226 (Send 'Hi')",
customerCare: "1800 1234 / 1800 2100",
debitReasons: [
"ATM Withdrawal",
"UPI Payment",
"POS Purchase",
"NEFT/RTGS/IMPS",
"EMI",
"SMS Charges",
"Minimum Balance Charges"
]
},
{
name: "HDFC Bank",
app: "HDFC Mobile Banking",
website: "https://www.hdfcbank.com",
miniStatement: "Missed Call Banking",
sms: "SMS TXN to registered banking service",
whatsapp: "7070022222 (Send 'Hi')",
customerCare: "1800 1600",
debitReasons: [
"UPI",
"Debit Card Purchase",
"Credit Card Bill",
"AutoPay",
"EMI",
"GST",
"Service Charges"
]
},
{
name: "ICICI Bank",
app: "iMobile Pay",
website: "https://www.icicibank.com",
miniStatement: "Available via iMobile & Net Banking",
sms: "SMS ITRAN",
whatsapp: "8640086400 (Send 'Hi')",
customerCare: "1800 1080",
debitReasons: [
"UPI",
"ATM",
"NEFT",
"RTGS",
"FASTag",
"Insurance Premium",
"Standing Instructions"
]
},
{
name: "Axis Bank",
app: "Axis Mobile",
website: "https://www.axisbank.com",
miniStatement: "Missed Call Banking",
sms: "SMS MINI",
whatsapp: "7036165000 (Send 'Hi')",
customerCare: "1860 419 5555",
debitReasons: [
"Debit Card",
"UPI",
"EMI",
"Auto Debit",
"FASTag",
"GST"
]
},
{
name: "Punjab National Bank",
app: "PNB ONE",
website: "https://www.pnbindia.in",
miniStatement: "Missed Call Banking",
sms: "MINSTMT",
whatsapp: "9264092640 (Send 'Hi')",
customerCare: "1800 1800",
debitReasons: [
"ATM",
"Cheque",
"UPI",
"NEFT",
"RTGS",
"SMS Charges"
]
},
{
name: "Canara Bank",
app: "Canara ai1",
website: "https://canarabank.com",
miniStatement: "Missed Call Banking",
sms: "MINI",
whatsapp: "9076030001 (Send 'Hi')",
customerCare: "1800 1030",
debitReasons: [
"UPI",
"ATM",
"POS",
"AutoPay",
"EMI"
]
},
{
name: "Bank of Baroda",
app: "bob World",
website: "https://www.bankofbaroda.in",
miniStatement: "Missed Call Service",
sms: "Mini Statement SMS",
whatsapp: "8433888777 (Send 'Hi')",
customerCare: "1800 5700",
debitReasons: [
"UPI",
"ATM",
"Card Purchase",
"NEFT",
"RTGS"
]
},
{
  "name": "Indian Overseas Bank",
  "app": "IOBMobile (IOB Connect)",
  "website": "https://www.iob.bank.in",
  "miniStatement": "Missed Call Service (8424022122)",
  "sms": "MINI <space> Last 4 digits of Account Number to 8424022122",
  "whatsapp": "9677711234 (Send 'Hi')",
  "customerCare": "1800 890 4445 / 1800 425 4445",
  "debitReasons": [
    "UPI",
    "ATM Withdrawals",
    "POS/Card Purchase",
    "NEFT/RTGS/IMPS",
    "Internet Banking/Mobile Banking Transfer"
  ]
},
{
  name: "Telangana Grameena Bank",
  app: "TGB Mobile Banking",
  website: "https://tgb.bank.in",
  miniStatement: "Missed Call Banking (09278031313)",
  sms: "Balance Enquiry & Mini Statement via Mobile Banking",
  whatsapp: "Not Available",
  customerCare: "1800 425 3435",
  debitReasons: [
    "UPI",
    "ATM Withdrawal",
    "POS Purchase",
    "NEFT/RTGS/IMPS",
    "Bank Charges"
  ]
},
{
  name: "Andhra Pradesh Grameena Bank",
  app: "APGB Mobile Banking",
  website: "https://apgb.bank.in",
  miniStatement: "Missed Call Banking (9090290912)",
  sms: "Send BAL to 9902988992",
  whatsapp: "9090290912 (Send 'Hi')",
  customerCare: "1800 425 1515",
  debitReasons: [
    "UPI",
    "ATM Withdrawal",
    "POS Purchase",
    "NEFT/RTGS/IMPS",
    "Bank Charges"
  ]
},
{
name: "Union Bank of India",
app: "Vyom",
website: "https://www.unionbankofindia.co.in",
miniStatement: "Missed Call Banking",
sms: "Mini Statement SMS",
whatsapp: "9666606060 (Send 'Hi')",
customerCare: "1800 2222",
debitReasons: [
"UPI",
"ATM",
"POS",
"EMI",
"Standing Instruction"
]
},
{
name: "Indian Bank",
app: "IndOASIS",
website: "https://www.indianbank.in",
miniStatement: "Missed Call Banking",
sms: "Mini Statement",
whatsapp: "8754424242 (Send 'Hi')",
customerCare: "1800 4250 0000",
debitReasons: [
"UPI",
"ATM",
"Debit Card",
"IMPS",
"NEFT"
]
},
{
    "name": "Kotak Mahindra Bank",
    "app": "Kotak811 Mobile Banking",
    "website": "https://kotak.com",
    "miniStatement": "Missed Call Service (1800 274 0110)",
    "sms": "TXN <space> last 4 digits of card number to 5676788",
    "whatsapp": "2266006022 (Send 'Hi')",
    "customerCare": "1860 266 2666",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Central Bank of India",
    "app": "Cent Mobile",
    "website": "https://www.centralbankofindia.co.in",
    "miniStatement": "Missed Call Service (9555144441)",
    "sms": "LATRAN <space> last 4 digits of account number to 9967533228",
    "whatsapp": "7900123123 (Send 'Hi')",
    "customerCare": "1800 3030",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
 {
    "name": "IndusInd Bank",
    "app": "Indie / IndusMobile",
    "website": "https://indusind.com",
    "miniStatement": "Missed Call Service (1800 274 1000)",
    "sms": "MINI to 9212299955",
    "whatsapp": "2244066666 (Send 'Hi')",
    "customerCare": "1860 267 7777",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Federal Bank",
    "app": "FedMobile",
    "website": "https://federalbank.co.in",
    "miniStatement": "Missed Call Service (8431600600)",
    "sms": "FTSTMT <space> last 4 digits of account number to 5676762",
    "whatsapp": "9633333257 (Send 'Hi')",
    "customerCare": "1800 425 1199 / 1800 420 1199",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Yes Bank",
    "app": "iris by YES BANK",
    "website": "https://yesbank.in",
    "miniStatement": "Missed Call Service (09223921111)",
    "sms": "YESTXN <space> CustID to +919840909000",
    "whatsapp": "8291201200 (Send 'Hi')",
    "customerCare": "1800 1200",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "RBL Bank",
    "app": "RBL MoBank",
    "website": "https://rblbank.com",
    "miniStatement": "Missed Call Service (1800 419 0610)",
    "sms": "TXN <space> last 4 digits of account number to 9223366333",
    "whatsapp": "2261156300 (Send 'Hi')",
    "customerCare": "1800 121 9050",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Bank of India",
    "app": "BOI Mobile Omni Neo",
    "website": "https://bankofindia.co.in",
    "miniStatement": "Missed Call Service (09266135135)",
    "sms": "TRANS <space> 4-digit PIN to 9212304242",
    "whatsapp": "8376006006 (Send 'Hi')",
    "customerCare": "1800 103 1906 / 1800 22 0229",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
{
    "name": "South Indian Bank",
    "app": "SIB Mirror+",
    "website": "https://southindianbank.com",
    "miniStatement": "Missed Call Service (09223008488)",
    "sms": "TXN <space> 4-digit PIN to 9840777222",
    "whatsapp": "9645599444 (Send 'Hi')",
    "customerCare": "1800 425 1809 / 1800 102 9408",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "IDBI Bank",
    "app": "IDBI Bank Go Mobile+",
    "website": "https://idbibank.in",
    "miniStatement": "Missed Call Service (1800 843 1144)",
    "sms": "MINI <space> last 4 digits of account number to 9820346920",
    "whatsapp": "8860042226 (Send 'Hi')",
    "customerCare": "1800 209 4324 / 1800 22 1070",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
{
name: "UCO Bank",
app: "mPassbook Plus",
website: "https://www.ucobank.com",
miniStatement: "Missed Call Banking",
sms: "Mini Statement",
whatsapp: "8334001234 (Send 'Hi')",
customerCare: "1800 103 0123",
debitReasons: [
"ATM",
"UPI",
"Card Payment",
"SMS Charges",
"Minimum Balance"
]
},
 {
    "name": "AU Small Finance Bank",
    "app": "AU 0101",
    "website": "https://aubank.in",
    "miniStatement": "Missed Call Service (1800 1202 586)",
    "sms": "MINI <space> last 4 digits of account number to 56161",
    "whatsapp": "7012014114 (Send 'Hi')",
    "customerCare": "1800 1200 1200",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Equitas Small Finance Bank",
    "app": "Equitas Selfe Mobile",
    "website": "https://equitasbank.com",
    "miniStatement": "Missed Call Service (1800 3000 0600)",
    "sms": "TXN <space> last 4 digits of account number to 9223171444",
    "whatsapp": "8122667788 (Send 'Hi')",
    "customerCare": "1800 103 1222",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Ujjivan Small Finance Bank",
    "app": "Ujjivan Mobile Banking",
    "website": "https://ujjivansfb.in",
    "miniStatement": "Missed Call Service (9243012121)",
    "sms": "MINI to 9243012121",
    "whatsapp": "6366810252 (Send 'Hi')",
    "customerCare": "1800 208 2121",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "J&K Bank",
    "app": "mPay Delight Plus",
    "website": "https://jkbank.com",
    "miniStatement": "Missed Call Service (1800 1800 234)",
    "sms": "JKBMS <space> last 4 digits of account number to 56070",
    "whatsapp": "9063906300 (Send 'Hi')",
    "customerCare": "1800 890 2122",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Karnataka Bank",
    "app": "KBL Mobile Plus",
    "website": "https://karnatakabank.com",
    "miniStatement": "Missed Call Service (1800 425 1446)",
    "sms": "MINI <space> last 4 digits of account number to 9880654321",
    "whatsapp": "7303310055 (Send 'Hi')",
    "customerCare": "1800 425 1444 / 1800 572 8031",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Karur Vysya Bank",
    "app": "KVB DLite",
    "website": "https://kvb.co.in",
    "miniStatement": "Missed Call Service (09266292665)",
    "sms": "KVB <space> MINI to 9266292666",
    "whatsapp": "09266292666 (Send 'Hi')",
    "customerCare": "1860 258 1916",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Bandhan Bank",
    "app": "Bandhan Bank Mobile Banking",
    "website": "https://bandhanbank.com",
    "miniStatement": "Missed Call Service (1800 258 8182)",
    "sms": "MINI <space> last 4 digits of account number to 9223008182",
    "whatsapp": "18002588181 (Send 'Hi')",
    "customerCare": "1800 258 8181",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  },
  {
    "name": "Airtel Payments Bank",
    "app": "Airtel Thanks",
    "website": "https://airtel.in",
    "miniStatement": "Dial *400# (USSD Menu)",
    "sms": "MINI to 400",
    "whatsapp": "8800688006 (Send 'Hi')",
    "customerCare": "400 (For Airtel Users) / 8800688006",
    "debitReasons": ["UPI", "Virtual Card Purchase", "Wallet Transfer", "IMPS", "Aeps withdrawal"]
  },
  {
    "name": "India Post Payments Bank",
    "app": "IPPB Mobile Banking",
    "website": "https://ippbonline.com",
    "miniStatement": "Missed Call Service (8424054994)",
    "sms": "MINI to 7738062873",
    "whatsapp": "8826909200 (Send 'Hi')",
    "customerCare": "155299",
    "debitReasons": ["UPI", "Virtual Debit Card", "IMPS", "Post Office Transfer", "AEPS"]
  },
  {
    "name": "HSBC India",
    "app": "HSBC India",
    "website": "https://hsbc.co.in",
    "miniStatement": "Internet/Mobile Banking Only",
    "sms": "HSBC <space> TXN to 56767",
    "whatsapp": "Not Available",
    "customerCare": "1800 266 3456 / 1800 120 4722",
    "debitReasons": ["UPI", "ATM", "Card Purchase", "NEFT", "RTGS"]
  }
];
export default banks;