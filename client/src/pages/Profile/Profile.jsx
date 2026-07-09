import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

function Profile() {
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("user")) || {
        name: "",
        email: "",
        phone: "",
        bank: "",
      }
    );
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setMessage("✅ Profile updated successfully!");
  };
const profileFields = [
  user.name,
  user.email,
  user.phone,
  user.bank,
];

const completedFields = profileFields.filter(
  (field) => field && field.trim() !== ""
).length;

const completion = Math.round(
  (completedFields / profileFields.length) * 100
);
  return (
  <div
    className={`flex min-h-screen ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-100 text-black"
    }`}
  >
    <Sidebar />

    <div
      className={`md:ml-64 p-8 w-full ${
        darkMode ? "bg-gray-900 text-white" : ""
      }`}
    >
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="bg-white rounded-xl shadow p-8 max-w-2xl">

          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="space-y-5">

            <div>
              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

           <div>
  <label className="block font-semibold mb-2">
    Primary Bank
  </label>

  <select
    name="bank"
    value={user.bank}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  >
    <option value="">Select Primary Bank</option>
    <option value="SBI">SBI</option>
    <option value="HDFC">HDFC Bank</option>
    <option value="ICICI">ICICI Bank</option>
    <option value="Axis">Axis Bank</option>
    <option value="PNB">Punjab National Bank</option>
    <option value="Canara">Canara Bank</option>
    <option value="Bank of Baroda">Bank of Baroda</option>
    <option value="Union Bank">Union Bank</option>
    <option value="Indian Bank">Indian Bank</option>
    <option value="Kotak">Kotak Mahindra Bank</option>
  </select>
</div>
            {message && (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
    {message}
  </div>
)}
            <button
              onClick={saveProfile}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Profile
            </button>
            <div className="mt-8">
  <h3 className="font-semibold mb-2">
    Profile Completion
  </h3>

  <div className="w-full bg-gray-200 rounded-full h-4">
    <div
      className="bg-green-600 h-4 rounded-full"
      style={{ width: `${completion}%` }}
    ></div>
  </div>

  <p className="mt-2 text-gray-600">
    {completion}% Completed
  </p>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">Account Status</h2>

  <div className="grid grid-cols-2 gap-6">

    <div>
      <p className="text-gray-500">KYC Status</p>
      <p className="text-green-600 font-bold">✅ Verified</p>
    </div>

    <div>
      <p className="text-gray-500">Account Status</p>
      <p className="text-green-600 font-bold">🟢 Active</p>
    </div>

    <div>
      <p className="text-gray-500">Member Since</p>
      <p className="font-semibold">June 2026</p>
    </div>

    <div>
      <p className="text-gray-500">Primary Bank</p>
      <p className="font-semibold">
        {user.bank || "Not Selected"}
      </p>
    </div>

  </div>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">Security Settings</h2>

  <div className="grid grid-cols-2 gap-6">

    <div>
      <p className="text-gray-500">Password</p>
      <p className="font-semibold">••••••••</p>
    </div>

    <div>
      <p className="text-gray-500">Two-Factor Authentication</p>
      <p className="text-green-600 font-semibold">Enabled</p>
    </div>

    <div>
      <p className="text-gray-500">Last Login</p>
      <p className="font-semibold">
        {new Date().toLocaleString()}
      </p>
    </div>

    <div>
      <p className="text-gray-500">Device</p>
      <p className="font-semibold">Windows Laptop</p>
    </div>

  </div>

  <button
    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
  >
    Change Password
  </button>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">Profile Statistics</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div className="bg-blue-50 rounded-lg p-4">
      <p className="text-gray-500 text-sm">Transactions</p>
      <h3 className="text-2xl font-bold text-blue-600">
        {JSON.parse(localStorage.getItem("transactions"))?.length || 0}
      </h3>
    </div>

    <div className="bg-green-50 rounded-lg p-4">
      <p className="text-gray-500 text-sm">Reports</p>
      <h3 className="text-2xl font-bold text-green-600">
        {JSON.parse(localStorage.getItem("transactions"))?.length > 0 ? 1 : 0}
      </h3>
    </div>

    <div className="bg-yellow-50 rounded-lg p-4">
      <p className="text-gray-500 text-sm">Statements</p>
      <h3 className="text-2xl font-bold text-yellow-600">
        {JSON.parse(localStorage.getItem("transactions"))?.length > 0 ? 1 : 0}
      </h3>
    </div>

    <div className="bg-purple-50 rounded-lg p-4">
      <p className="text-gray-500 text-sm">Budgets</p>
      <h3 className="text-2xl font-bold text-purple-600">1</h3>
    </div>

  </div>
</div>
<div className="bg-white shadow rounded-xl p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">Appearance</h2>

  <div className="flex items-center justify-between">
    <div>
      <p className="font-semibold">Dark Mode</p>
      <p className="text-gray-500 text-sm">
        Switch between Light and Dark theme
      </p>
    </div>

    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />

      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>

      <div
        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
          darkMode ? "translate-x-5" : ""
        }`}
      ></div>
    </label>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;