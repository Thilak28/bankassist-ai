import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Login button clicked");

  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    console.log("Response:", response.data);

    localStorage.setItem("token", response.data.token);
    console.log("Navigating to dashboard");
    navigate("/dashboard");
  } catch (error) {
    console.log("Error:", error);
    console.log("Response:", error.response?.data);
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="bg-slate-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          BankAssist AI
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-slate-800 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Login
          </button>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;