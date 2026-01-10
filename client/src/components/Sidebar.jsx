import { Link, useLocation } from "react-router-dom";
import { Home, Users, FileText, Calendar, Settings, LayoutGrid, LogOut } from "lucide-react";
import { auth } from "../services/api";

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const menu = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={18} /> },
    { path: "/patients", label: "Patients", icon: <Users size={18} /> },
    { path: "/reports", label: "Reports", icon: <FileText size={18} /> },
    { path: "/appointments", label: "Appointments", icon: <Calendar size={18} /> },
    { path: "/doc-availability", label: "Seat Availability", icon: <LayoutGrid size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm p-6">
      <h1 className="text-2xl font-semibold text-green-700 mb-8">AyurSutra</h1>

      <nav className="space-y-4">
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

      <div className="absolute bottom-8 left-6 right-6">
        <button
          onClick={() => {
            auth.logout();
            window.location.href = "/login";
          }}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
