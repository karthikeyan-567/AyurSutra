import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (user && pass) {
      localStorage.setItem("authRole", "admin");
      navigate("/admin");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white border shadow-sm rounded-2xl p-6 w-80 space-y-4">
        <div className="flex justify-center text-green-700">
          <Shield size={32}/>
        </div>
        <h2 className="text-center text-lg font-semibold text-green-700">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={e => setUser(e.target.value)}
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
        />

        <button onClick={login} className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl text-sm font-medium transition">
          Login
        </button>
      </div>
    </div>
  );
}
