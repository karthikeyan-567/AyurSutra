import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  FileText,
  Calendar,
  Settings,
  LayoutGrid,
  LogOut,
} from "lucide-react";

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={18} /> },
    { path: "/patients", label: "Patients", icon: <Users size={18} /> },
    { path: "/reports", label: "Reports", icon: <FileText size={18} /> },
    { path: "/appointments", label: "Appointments", icon: <Calendar size={18} /> },
    { path: "/doc-availability", label: "Seat Availability", icon: <LayoutGrid size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    // Clear auth/session data (adjust keys if needed)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("doctor");

    // Close sidebar if needed
    if (onClose) onClose();

    // Redirect to login
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm p-6 flex flex-col">
      <h1 className="text-2xl font-semibold text-green-700 mb-8">
        AyurSutra
      </h1>

      {/* Menu */}
      <nav className="space-y-4 flex-1">
        {menu.map((m, i) => {
          const active = location.pathname === m.path;
          return (
            <Link
              key={i}
              to={m.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition relative ${
                active
                  ? "text-green-700 bg-green-50 font-semibold"
                  : "text-gray-600 hover:text-green-700 hover:bg-green-50/40"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-green-700 rounded-r-lg"></span>
              )}
              <span className="text-green-700">{m.icon}</span>
              {m.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
