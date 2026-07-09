import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import AIInsight from "./pages/AIInsight/AIInsight";
import Reports from "./pages/Reports/Reports";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import BankServices from "./pages/BankServices/BankServices";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/ai" element={<AIInsight />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bank-services" element={<BankServices />} />
    </Routes>
  );
}

export default App;