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
<<<<<<< HEAD
  Bed,
=======
>>>>>>> 5630ecea4a826863e9cb2894b315c65f86b429b0
  ShieldCheck,
  LogOut
} from "lucide-react";

import "../styles/PatientSideBar.css";
import { auth } from "../services/api";

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
<<<<<<< HEAD
    
=======

>>>>>>> 5630ecea4a826863e9cb2894b315c65f86b429b0
        <NavLink to="/insurance">
          <ShieldCheck size={20} /> Insurance
        </NavLink>

        <NavLink to="/profile-pap">
          <User size={20} /> Profile
        </NavLink>

        <NavLink to="/patient-settings">
          <Settings size={20} /> Settings
        </NavLink>

<<<<<<< HEAD
        <button
          onClick={() => {
            auth.logout();
            window.location.href = "/login";
          }}
          className="logout-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 18px',
            color: '#ef4444',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: 'auto'
          }}
        >
=======
        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
>>>>>>> 5630ecea4a826863e9cb2894b315c65f86b429b0
          <LogOut size={20} /> Logout
        </button>
      </nav>
    </aside>
  );
}
