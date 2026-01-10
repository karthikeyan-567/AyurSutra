import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { auth } from "../services/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("patient"); // default
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !pass) return;
    setError("");
    try {
      const data = await auth.login(email, pass);
      localStorage.setItem("authRole", data.user.role.toLowerCase());

      if (data.user.role === "ADMIN") navigate("/admin");
      else if (data.user.role === "DOCTOR") navigate("/dashboard");
      else navigate("/patient-dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Login" icon={<User size={30} />}>
      <select
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700 text-gray-600"
        value={role}
      >
        <option value="PATIENT">Patient</option>
        <option value="DOCTOR">Doctor</option>
        <option value="ADMIN">Admin</option>
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

      {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}

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
