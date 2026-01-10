import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { auth } from "../services/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !pass) return;
    setError("");
    try {
      await auth.register({ name, email, password: pass, role });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Register" icon={<UserPlus size={30} />}>
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
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      <input
        type="password"
        placeholder="Create password (min 8 chars)"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}

      <button
        onClick={handleRegister}
        className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl text-sm font-medium transition"
      >
        Create Account
      </button>

      <div className="text-center text-xs text-gray-500">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-green-700 hover:underline cursor-pointer"
        >
          Login
        </span>
      </div>
    </AuthLayout>
  );
}
