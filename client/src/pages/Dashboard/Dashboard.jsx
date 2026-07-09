import { useEffect, useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import api from "../../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    totalTransactions: 0,
    recentTransactions: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-64 p-8 w-full">

        <h1 className="text-4xl font-bold mb-2">
          Welcome to BankAssist AI 👋
        </h1>

        <p className="text-gray-600 mb-8">
          Smart Banking • Mini Statement Analyzer • AI Insights
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-green-500 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold">Total Income</h3>
            <p className="text-3xl font-bold mt-3">
              ₹{dashboard.totalIncome}
            </p>
          </div>

          <div className="bg-red-500 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold">Total Expense</h3>
            <p className="text-3xl font-bold mt-3">
              ₹{dashboard.totalExpense}
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold">Current Balance</h3>
            <p className="text-3xl font-bold mt-3">
              ₹{dashboard.balance}
            </p>
          </div>

          <div className="bg-purple-600 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold">
              Total Transactions
            </h3>
            <p className="text-3xl font-bold mt-3">
              {dashboard.totalTransactions}
            </p>
          </div>

        </div>

        {/* Recent Transactions */}

        <div className="bg-white rounded-xl shadow-lg mt-10 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent Transactions
          </h2>

          <table className="w-full border">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Description</th>
                <th className="p-3">Date</th>
              </tr>

            </thead>

            <tbody>

              {dashboard.recentTransactions.length > 0 ? (

                dashboard.recentTransactions.map((item) => (

                  <tr
                    key={item._id}
                    className="text-center border-b hover:bg-gray-100"
                  >

                    <td className="p-3 capitalize">
                      {item.type}
                    </td>

                    <td className="p-3">
                      {item.category}
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{item.amount}
                    </td>

                    <td className="p-3">
                      {item.description}
                    </td>

                    <td className="p-3">
                      {new Date(item.date).toLocaleDateString()}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center p-5 text-gray-500"
                  >
                    No Transactions Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;