// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
function Register() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await api.post("/api/auth/register", {
            name,
            email,
            password,
        });

        alert(response.data.message);
        navigate("/login");
    } catch (error) {
        alert(error.response?.data?.message || "Registration failed");
        console.error(error);
    }
};
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="bg-slate-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Register
        </h2>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
           <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Create a password"
    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;