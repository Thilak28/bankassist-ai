import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
 import banks from "../../data/banks";
function BankServices() {
const [search, setSearch] = useState("");
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-64 p-8 w-full">

        <h1 className="text-4xl font-bold mb-2">
          Bank Services
        </h1>

        <p className="text-gray-600 mb-8">
          Official Mini Statement & Banking Information
        </p>
        <div className="mb-8">
  <input
    type="text"
    placeholder="🔍 Search by bank name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
        <div className="grid md:grid-cols-2 gap-6">

          {banks
  .filter((bank) => {
    const keyword = search.toLowerCase();

    return (
      bank.name.toLowerCase().includes(keyword) ||
      bank.app.toLowerCase().includes(keyword) ||
      bank.customerCare.toLowerCase().includes(keyword) ||
      bank.whatsapp.toLowerCase().includes(keyword)
    );
  })
  .map((bank, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold text-blue-600">
                {bank.name}
              </h2>

              <p className="mt-3">
                <strong>📱 Mobile App:</strong> {bank.app}
              </p>

              <p className="mt-2">
                <strong>🌐 Website:</strong>{" "}
                <a
                  href={bank.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit Website
                </a>
              </p>

              <p className="mt-2">
                <strong>📞 Missed Call:</strong> {bank.missedCall}
              </p>

              <p className="mt-2">
                <strong>📩 SMS:</strong> {bank.sms}
              </p>

              <p className="mt-2">
                <strong>💬 WhatsApp:</strong> {bank.whatsapp}
              </p>
                {banks.filter((bank) =>
  bank.name.toLowerCase().includes(search.toLowerCase())
).length === 0 && (
  <div className="col-span-2 text-center text-red-500 text-xl mt-6">
    No Bank Found
  </div>
)}
            </div>

          ))}

        </div>

      </div>
    </div>
  );
}
export default BankServices;
