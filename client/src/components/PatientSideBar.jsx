import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Calendar,
  Hospital,
  Dumbbell,
  FileText,
  TrendingUp,
  User,
  Settings,
  ShieldCheck,
  LogOut
} from "lucide-react";

import "../styles/PatientSideBar.css";

export default function PatientSideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data (adjust keys as per your app)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <aside className="patient-sidebar">
      <h2 className="sidebar-logo">AVARTANA CARE</h2>

      <nav className="sidebar-menu">
        <NavLink to="/patient-dashboard">
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="/patient-appointments">
          <Calendar size={20} /> Appointments
        </NavLink>

        <NavLink to="/clinics">
          <Hospital size={20} /> Therapy Centers
        </NavLink>

        <NavLink to="/exercises">
          <Dumbbell size={20} /> Exercises & Therapy
        </NavLink>

        <NavLink to="/prescriptions">
          <FileText size={20} /> Prescriptions
        </NavLink>

        <NavLink to="/progress">
          <TrendingUp size={20} /> Progress & Reports
        </NavLink>

        <NavLink to="/insurance">
          <ShieldCheck size={20} /> Insurance
        </NavLink>

        <NavLink to="/profile-pap">
          <User size={20} /> Profile
        </NavLink>

        <NavLink to="/patient-settings">
          <Settings size={20} /> Settings
        </NavLink>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} /> Logout
        </button>
      </nav>
    </aside>
  );
}
