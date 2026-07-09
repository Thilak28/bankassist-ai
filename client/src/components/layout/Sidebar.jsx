import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaExchangeAlt,
  FaUpload,
  FaRobot,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h1 className="text-3xl font-bold text-center py-6 text-blue-400">
          BankAssist AI
        </h1>

        <nav className="flex flex-col gap-2 px-5">

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaHome /> Dashboard
          </Link>

          <Link
            to="/transactions"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaExchangeAlt /> Transactions
          </Link>

          <Link
            to="/upload"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaUpload /> Upload
          </Link>

          <Link
            to="/ai"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaRobot /> AI Insights
          </Link>

          <Link
            to="/reports"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaChartBar /> Reports
          </Link>

          <Link
            to="/bank-services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            🏦 Bank Services
          </Link>

          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-700"
          >
            <FaUser /> Profile
          </Link>

         <button
  onClick={handleLogout}
  className="flex items-center gap-3 p-3 rounded hover:bg-red-600 mt-8"
>
            <FaSignOutAlt /> Logout
          </button>

        </nav>
      </div>
    </>
  );
}

export default Sidebar;