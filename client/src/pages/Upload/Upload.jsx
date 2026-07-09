import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import api from "../../services/api";
function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [inputKey, setInputKey] = useState(Date.now());
const[transactions, setTransactions] = useState([]);
const [selectedDate, setSelectedDate] = useState("");
const [selectedType, setSelectedType] = useState("");
const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();


if (!file) {
    setError("⚠️ Please select a bank statement file.");
    setMessage("");
    return;
}

  try {
    const formData = new FormData();
    formData.append("statement", file);

    const res = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
   setMessage("✅ File uploaded successfully!");
setTransactions(res.data.transactions);
localStorage.setItem(
  "transactions",
  JSON.stringify(res.data.transactions)
);
setError("");

    // alert(res.data.message);

    console.log(res.data);

    setFile(null);
    setInputKey(Date.now()); // Reset the file input

  } catch (error) {
    console.log(error);
    setError("❌ Upload failed. Please try again.");
setMessage("");
  }
};
function convertDate(date) {
  const months = {
    JAN: "01",
    FEB: "02",
    MAR: "03",
    APR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AUG: "08",
    SEP: "09",
    OCT: "10",
    NOV: "11",
    DEC: "12",
  };
  const [day, month, year] = date.split("-");

  return `${year}-${months[month]}-${day}`;
}

const filteredTransactions = transactions.filter((transaction) => {
  const dateMatch =
    !selectedDate ||
    convertDate(transaction.date) === selectedDate;

  const typeMatch =
    !selectedType ||
    transaction.type === selectedType;

  const searchMatch =
    !search ||
    transaction.description.toLowerCase().includes(search.toLowerCase()) ||
    transaction.analysis.category.toLowerCase().includes(search.toLowerCase()) ||
    transaction.analysis.reason.toLowerCase().includes(search.toLowerCase());

  return dateMatch && typeMatch && searchMatch;
});
const totalDebit = filteredTransactions
  .filter((t) => t.type === "DR")
  .reduce((sum, t) => sum + Number(t.amount), 0);

const totalCredit = filteredTransactions
  .filter((t) => t.type === "CR")
  .reduce((sum, t) => sum + Number(t.amount), 0);

const totalTransactions = filteredTransactions.length;
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-64 p-8 w-full">

        <h1 className="text-4xl font-bold">
          Upload Bank Statement
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Upload your bank statement (PDF, CSV or Excel) for AI analysis.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >
         <input
  key={inputKey}
  type="file"
  accept=".pdf,.csv,.xlsx"
  onChange={(e) => {
    setFile(e.target.files[0]);
    setError("");
    setMessage("");
  }}
  
  className="border p-3 w-full rounded"
/>
          {file && (
            <div className="mt-4 text-green-600">
              Selected File: <strong>{file.name}</strong>
            </div>
          )}
          {message && (
  <div className="mt-4 bg-green-100 text-green-700 border border-green-300 p-3 rounded">
    {message}
  </div>
)}

{error && (
  <div className="mt-4 bg-red-100 text-red-700 border border-red-300 p-3 rounded">
    {error}
  </div>
)}
    <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Upload Statement
          </button>
          {transactions.length > 0 && (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">
      Transaction Analysis
    </h2>

    <div className="overflow-x-auto">
      <div style={{ marginBottom: "20px" }}>
  <label><b>Filter by Date:</b></label>

  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
  />
  <select
  value={selectedType}
  onChange={(e) => setSelectedType(e.target.value)}
>
  <option value="">All</option>
  <option value="DR">Debit (DR)</option>
  <option value="CR">Credit (CR)</option>
</select>
<div style={{ marginTop: "15px", marginBottom: "15px" }}>
  <input
    type="text"
    placeholder="Search by description, category..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "300px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    }}
  />
</div>
</div>
<div
  style={{
    display: "flex",
    gap: "20px",
    margin: "20px 0",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "#e3f2fd",
      padding: "15px",
      borderRadius: "8px",
      minWidth: "180px",
    }}
  >
    <h3>Total Transactions</h3>
    <p>{totalTransactions}</p>
  </div>

  <div
    style={{
      background: "#ffebee",
      padding: "15px",
      borderRadius: "8px",
      minWidth: "180px",
    }}
  >
    <h3>Total Debit</h3>
    <p>₹ {totalDebit.toFixed(2)}</p>
  </div>

  <div
    style={{
      background: "#e8f5e9",
      padding: "15px",
      borderRadius: "8px",
      minWidth: "180px",
    }}
  >
    <h3>Total Credit</h3>
    <p>₹ {totalCredit.toFixed(2)}</p>
  </div>
</div>
      <table className="w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Reason</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((item, index) => (
            <tr key={index} className="border">
              <td className="p-2 border">
                {item.date}
              </td>
              <td className="p-2 border">
                {item.type}
              </td>
              <td className="p-2 border">
                {item.amount}
              </td>
              <td className="p-2 border">
                {item.description}
              </td>

              <td className="p-2 border">
                {item.analysis.category}
              </td>

              <td className="p-2 border">
                {item.analysis.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
        </form>
      </div>
    </div>
  );
}

export default Upload;