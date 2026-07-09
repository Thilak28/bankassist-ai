import Sidebar from "../../components/layout/Sidebar";

function AIInsights() {
  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

// Total Debit
const totalDebit = transactions
  .filter((t) => t.type === "DR")
  .reduce((sum, t) => sum + Number(t.amount), 0);

// Total Credit
const totalCredit = transactions
  .filter((t) => t.type === "CR")
  .reduce((sum, t) => sum + Number(t.amount), 0);
const totalTransactions = transactions.length;
const recentTransactions = [...transactions].slice(-5).reverse();
// Highest Transaction
const highestTransaction =
  transactions.length > 0
    ? transactions.reduce((max, t) =>
        Number(t.amount) > Number(max.amount) ? t : max
      )
    : null;

// Category Count
const categoryCount = {};
const categoryAmount = {};

transactions.forEach((t) => {

  const category = t.analysis.category;
  const amount = Number(t.amount);

  categoryCount[category] =
    (categoryCount[category] || 0) + 1;

  categoryAmount[category] =
    (categoryAmount[category] || 0) + amount;

});

// Most Used Category
const mostUsedCategory =
Object.keys(categoryCount).length
? Object.keys(categoryCount).reduce((a,b)=>
categoryCount[a]>categoryCount[b]?a:b)
:"No Data";

// Highest Spending Category
const highestSpendingCategory =
Object.keys(categoryAmount).length
? Object.keys(categoryAmount).reduce((a,b)=>
categoryAmount[a]>categoryAmount[b]?a:b)
:"No Data";

// Highest Spending Amount
const highestCategoryAmount =
categoryAmount[highestSpendingCategory] || 0;

// UPI Count
const upiCount = transactions.filter((t)=>
t.analysis.category==="UPI Payment"
).length;

// Shopping Amount
const shoppingAmount =
categoryAmount["Shopping"] || 0;

// Investment Amount
const investmentAmount =
categoryAmount["Investment"] || 0;

// Bank Charges
const bankCharges =
categoryAmount["Bank Charges"] || 0;

// Savings
const netBalance = totalCredit-totalDebit;
  let recommendation = [];

if(totalDebit>totalCredit){
recommendation.push(
"⚠️ Your expenses are higher than your income."
);
}

if(shoppingAmount>5000){
recommendation.push(
"🛒 Shopping expenses are high. Consider reducing shopping."
);
}

if(bankCharges>0){
recommendation.push(
`🏦 You paid ₹${bankCharges} as bank charges.`
);
}

if(investmentAmount>0){
recommendation.push(
`📈 Great! You invested ₹${investmentAmount}.`
);
}

if(upiCount>20){
recommendation.push(
"💳 Most of your payments are through UPI."
);
}

if(recommendation.length===0){
recommendation.push(
"✅ Your spending pattern looks healthy."
);
}
const totalExpense = Object.values(categoryAmount).reduce(
  (sum, amount) => sum + amount,
  0
);

const categoryPercentage = {};

Object.keys(categoryAmount).forEach((category) => {
  categoryPercentage[category] =
    ((categoryAmount[category] / totalExpense) * 100).toFixed(1);
});
const savings = totalCredit - totalDebit;

let healthScore = 100;

if (savings < 0) healthScore -= 40;
if (totalDebit > totalCredit * 1.2) healthScore -= 20;
if (categoryAmount["Bank Charges"] > 500) healthScore -= 10;

healthScore = Math.max(0, healthScore);
const tips = [];

if (totalDebit > totalCredit) {
  tips.push("⚠️ Your expenses are higher than your income.");
}

if ((categoryAmount["Food"] || 0) > 3000) {
  tips.push("🍔 Your food expenses are high this month.");
}

if ((categoryAmount["Shopping"] || 0) > 5000) {
  tips.push("🛍️ Consider reducing shopping expenses.");
}

if ((categoryAmount["Bank Charges"] || 0) > 200) {
  tips.push("🏦 You paid high bank charges. Consider a zero-balance account.");
}

if ((categoryAmount["Investment"] || 0) > 0) {
  tips.push("📈 Great! You are investing regularly.");
}

if ((categoryAmount["UPI Payment"] || 0) > totalDebit * 0.6) {
  tips.push("💳 Most of your spending is through UPI.");
}

if (tips.length === 0) {
  tips.push("✅ Excellent! Your spending looks balanced.");
}
const alerts = [];

if (totalDebit > totalCredit) {
  alerts.push({
    type: "warning",
    message: "Expenses exceeded income this month."
  });
}

if ((categoryAmount["Bank Charges"] || 0) > 200) {
  alerts.push({
    type: "info",
    message: "High bank charges detected."
  });
}

if ((categoryAmount["Investment"] || 0) > 0) {
  alerts.push({
    type: "success",
    message: "Investment transactions found."
  });
}

if (highestTransaction) {
  alerts.push({
    type: "danger",
    message: `Highest transaction: ₹${Number(highestTransaction.amount).toFixed(2)}`
  });
}
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-64 p-8 w-full">

        <h1 className="text-4xl font-bold mb-8">
          AI Insights
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Total Debit
            </h2>
            <p className="text-3xl font-bold text-red-600 mt-3">
              ₹ {Number(totalDebit).toFixed(2)}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Total Credit
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-3">
              ₹ {Number(totalCredit).toFixed(2)}
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
  <h2 className="text-lg font-semibold">
    Total Transactions
  </h2>

  <p className="text-3xl font-bold text-blue-600 mt-3">
    {totalTransactions}
  </p>
</div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Highest Transaction
            </h2>

            {highestTransaction ? (
              <>
                <p className="text-3xl font-bold text-blue-600 mt-3">
                  ₹ {Number(highestTransaction.amount).toFixed(2)}
                </p>

                <p className="text-gray-600 mt-2">
  {highestTransaction?.analysis?.category || "No Category"}
</p>
              </>
            ) : (
              <p className="mt-3">No Data</p>
            )}
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-600">
              Most Used Category
            </h2>

            <p className="text-2xl font-bold text-purple-600 mt-3">
              {mostUsedCategory}
            </p>
          </div>
            <div className="bg-white shadow rounded-xl p-6">
<h2 className="text-lg font-semibold">
Highest Spending Category
</h2>

<p className="text-2xl font-bold text-orange-600 mt-3">
{highestSpendingCategory}
</p>

<p className="mt-2">
₹ {highestCategoryAmount}
</p>
</div>
<div className="bg-white shadow rounded-xl p-6">
  <h2 className="text-lg font-semibold">
    Net Balance
  </h2>

  <p
    className={`text-3xl font-bold mt-3 ${
      netBalance >= 0 ? "text-green-600" : "text-red-600"
    }`}
  >
    {netBalance >= 0
      ? `₹ ${netBalance.toFixed(2)}`
      : `-₹ ${Math.abs(netBalance).toFixed(2)}`}
  </p>
</div>
          <div className="bg-white shadow rounded-xl p-6 col-span-2">

<h2 className="text-xl font-semibold mb-4">
AI Recommendations
</h2>

<ul className="list-disc ml-6 space-y-2">

{recommendation.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-semibold mb-4">
    Top 5 Recent Transactions
  </h2>
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border p-2">Date</th>
        <th className="border p-2">Type</th>
        <th className="border p-2">Amount</th>
        <th className="border p-2">Category</th>
      </tr>
    </thead>

    <tbody>
      {recentTransactions.map((t, index) => (
        <tr key={index}>
          <td className="border p-2">{t.date}</td>
          <td className="border p-2">{t.type}</td>
          <td className="border p-2">₹ {Number(t.amount).toFixed(2)}</td>
          <td className="border p-2">
            {t.analysis?.category || "Others"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-6">
    Expense Breakdown
  </h2>

  {Object.keys(categoryAmount).map((category) => (
    <div key={category} className="mb-5">

      <div className="flex justify-between mb-1">
        <span className="font-medium">{category}</span>

        <span>
          ₹ {categoryAmount[category].toFixed(2)}
          {" "}
          ({categoryPercentage[category]}%)
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{
            width: `${categoryPercentage[category]}%`,
          }}
        ></div>
      </div>

    </div>
  ))}
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-6">
    Financial Health
  </h2>

  <p className="text-4xl font-bold text-green-600 mt-3">
    {healthScore}/100
  </p>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-semibold mb-4">
    Smart Spending Tips
  </h2>

  <ul className="space-y-2">
    {tips.map((tip, index) => (
      <li
        key={index}
        className="bg-blue-50 p-3 rounded-lg"
      >
        {tip}
      </li>
    ))}
  </ul>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-semibold mb-4">
    Alerts & Notifications
  </h2>

  {alerts.map((alert, index) => (
    <div
      key={index}
      className={`p-3 rounded-lg mb-3 ${
        alert.type === "warning"
          ? "bg-yellow-100 text-yellow-800"
          : alert.type === "success"
          ? "bg-green-100 text-green-800"
          : alert.type === "danger"
          ? "bg-red-100 text-red-800"
          : "bg-blue-100 text-blue-800"
      }`}
    >
      {alert.message}
    </div>
  ))}
</div>
        </div>

      </div>
    </div>
  );
}

export default AIInsights;