
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Sidebar from "../../components/layout/Sidebar";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Reports() {

  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  // Category totals
  const categoryTotals = {};

  transactions.forEach((t) => {
    const category = t.analysis.category;
    const amount = Number(t.amount);

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += amount;
  });

  // Debit & Credit totals
  const totalDebit = transactions
    .filter((t) => t.type === "DR")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalCredit = transactions
    .filter((t) => t.type === "CR")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  // Pie Chart
  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#3B82F6",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#06B6D4",
          "#EC4899",
          "#84CC16",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  // Bar Chart
  const barData = {
    labels: ["Debit", "Credit"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [totalDebit, totalCredit],
        backgroundColor: ["#EF4444", "#22C55E"],
      },
    ],
  };

  // PDF Download
  function downloadPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("BankAssist AI Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Total Transactions : ${transactions.length}`, 14, 35);
    doc.text(`Total Debit : ₹${totalDebit}`, 14, 45);
    doc.text(`Total Credit : ₹${totalCredit}`, 14, 55);

    const rows = transactions.map((t) => [
      t.date,
      t.type,
      t.amount,
      t.analysis.category,
      t.analysis.reason,
    ]);

    autoTable(doc, {
      startY: 70,
      head: [["Date", "Type", "Amount", "Category", "Reason"]],
      body: rows,
    });

    doc.save("BankAssist_Report.pdf");
  }

  // CSV Export
  function exportCSV() {

    const rows = [
      ["Date", "Type", "Amount", "Category", "Reason"],
      ...transactions.map((t) => [
        t.date,
        t.type,
        t.amount,
        t.analysis.category,
        t.analysis.reason,
      ]),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "BankAssist_Report.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar/>
  <div className="md:ml-64 p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="flex gap-4 mb-6">

        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Report PDF
        </button>

        <button
          onClick={exportCSV}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Expenses by Category
        </h2>

        <div className="w-96">
          <Pie data={pieData} />
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Debit vs Credit
        </h2>

        <div className="w-[600px]">
          <Bar data={barData} />
        </div>

      </div>

    </div>
    </div>
  );
}

export default Reports;