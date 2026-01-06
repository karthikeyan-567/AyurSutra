import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  Hospital,
  Dumbbell,
  FileText,
  TrendingUp,
  Settings,
  UserCheck,
  Users  // ✅ FIXED IMPORT
} from "lucide-react";

import "../styles/PatientSideBar.css";

export default function PatientSideBar() {
  return (
    <aside className="w-64 fixed left-0 top-0 bottom-0 bg-green-50 border-r border-green-200 p-5">

      {/* LOGO */}
      <h2 className="text-2xl font-semibold text-green-700 mb-8 tracking-tight">
        AyurSutra
      </h2>

      {/* MENU */}
      <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">

        <NavLink
          to="/patient-dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Home size={18} /> Dashboard
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Calendar size={18} /> Appointments
        </NavLink>

        <NavLink
          to="/clinics"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Hospital size={18} /> Therapy Centers
        </NavLink>

        <NavLink
          to="/exercises"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Dumbbell size={18} /> Exercises & Therapy
        </NavLink>

        <NavLink
          to="/prescriptions"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <FileText size={18} /> Prescriptions
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <TrendingUp size={18} /> Progress
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Users size={18} /> Profile  {/* ✅ FIXED ICON + LABEL */}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-xl transition ${
              isActive ? "bg-green-200 text-green-700" : "hover:bg-green-100"
            }`
          }
        >
          <Settings size={18} /> Settings
        </NavLink>

      </nav>

      {/* OPTIONAL TAG */}
      <div className="mt-10 flex items-center gap-1 text-green-600 text-[11px] font-semibold">
        <UserCheck size={14}/> Shows attended patients first
      </div>

    </aside>
  );
}
