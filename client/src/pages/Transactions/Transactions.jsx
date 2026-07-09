import { useEffect, useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import api from "../../services/api";
// const [editingId, setEditingId] = useState(null);
function Transactions() {
    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState(null);
  const [transactions, setTransactions] = useState([]);

 const [form, setForm] = useState({
  type: "expense",
  category: "",
  amount: "",
  description: "",
});
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
  try {
    const res = await api.get("/api/transactions");
    console.log("Transactions:", res.data);
    setTransactions(res.data);
  } catch (err) {
    console.log(err);
  }
};
const editTransaction = (transaction) => {
  setEditingId(transaction._id);

  setForm({
    type: transaction.type,
    category: transaction.category,
    amount: transaction.amount,
    description: transaction.description,
  });
};

  const addTransaction = async (e) => {
  e.preventDefault();

  try {

    if (editingId) {

      await api.put(`/api/transactions/${editingId}`, form);

      setEditingId(null);

    } else {

      await api.post("/api/transactions", form);

    }

    setForm({
      type: "expense",
      category: "",
      amount: "",
      description: "",
    });

    fetchTransactions();

  } catch (err) {
    console.log(err);
  }
};
  const deleteTransaction = async (id) => {
  try {
    await api.delete(`/api/transactions/${id}`);
    fetchTransactions();
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="flex bg-gray-100 min-h-screen">
    <Sidebar />
    <div className="md:ml-64 flex-1 p-8">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>

      <form onSubmit={addTransaction} className="space-y-3 mb-8">

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Category"
          className="border p-2 w-full"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Description"
          className="border p-2 w-full"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
  className="bg-blue-600 text-white px-6 py-2 rounded"
>
  {editingId ? "Update Transaction" : "Add Transaction"}
</button>

      </form>
          <input
  type="text"
  placeholder="Search by category or description..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 w-full mb-4 rounded"
/>
      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
  <tr>
    <th>Type</th>
    <th>Category</th>
    <th>Amount</th>
    <th>Description</th>
    <th>Date</th>
    <th>Actions</th>
  </tr>
</thead>

<tbody>
  {transactions
    .filter((item) => {
      return (
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    })
    .map((item) => (
      <tr key={item._id} className="text-center border-b">
        <td>{item.type}</td>
        <td>{item.category}</td>
        <td>₹{item.amount}</td>
        <td>{item.description}</td>
        <td>{new Date(item.date).toLocaleDateString()}</td>

        <td>
          <button
            onClick={() => editTransaction(item)}
            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
          >
            Edit
          </button>

          <button
            onClick={() => deleteTransaction(item._id)}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
</tbody>
      </table>
    </div>
    </div>
  );
}

export default Transactions;