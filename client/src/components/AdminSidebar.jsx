import {
  LayoutDashboard,
  Hospital,
  UserCheck,
  Armchair,
  ShieldCheck,
  Bell,
  LogOut,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { path: "/adclinics", label: "Clinics", icon: <Hospital size={18} /> },
    { path: "/doctors", label: "Doctors", icon: <UserCheck size={18} /> },
    {
      path: "/seatav",
      label: "Seat Availability",
      icon: <Armchair size={18} />,
    },
    {
      path: "/access-control",
      label: "Access Control",
      icon: <ShieldCheck size={18} />,
    },
    {
      path: "/notifications",
      label: "Notifications",
      icon: <Bell size={18} />,
    },
  ];

  const handleLogout = () => {
    // Clear admin auth data
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    // Redirect to login
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r pt-20 px-4 flex flex-col">
      {/* Menu */}
      <div className="space-y-2 flex-1">
        {menu.map((m) => (
          <Link
            key={m.path}
            to={m.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition ${
              location.pathname === m.path
                ? "bg-green-100 text-green-700"
                : "text-gray-600 hover:text-green-700 hover:bg-green-50"
            }`}
          >
            <span className="text-green-700">{m.icon}</span>
            {m.label}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 mb-6 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
