import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800 bg-slate-950">
      <h1 className="text-3xl font-bold text-blue-500">
        🚀 BankAssist AI
      </h1>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 rounded border border-blue-500 hover:bg-blue-600"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;