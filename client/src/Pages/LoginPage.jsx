import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import AuthLayout from "../Components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("patient"); // default
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !pass) return;

    localStorage.setItem("authRole", role);

    if (role === "admin") navigate("/admin");
    else if (role === "doctor") navigate("/dashboard");
    else navigate("/patient-dashboard");
  };

  return (
    <AuthLayout title="Login" icon={<User size={30} />}>
      <select
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700 text-gray-600"
        value={role}
      >
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="admin">Admin</option>
      </select>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl text-sm font-medium transition"
      >
        Login
      </button>

      <div className="text-center text-xs text-gray-500">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-green-700 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </div>
    </AuthLayout>
  );
}
