import {
  LayoutDashboard,
  UsersRound,
  CalendarClock,
  FileText,
  Activity,
  BrainCircuit,
  MessageSquareHeart,
  Hospital,
  UserCheck,
  Armchair,
  ShieldCheck,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

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
    }, // fixed seat icon
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

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r pt-20 px-4 space-y-2">
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
    </aside>
  );
}
