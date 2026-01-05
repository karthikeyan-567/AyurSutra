import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  Hospital,
  Dumbbell,
  FileText,
  TrendingUp,
  User,
  Settings
} from "lucide-react";

import "../styles/PatientSideBar.css";

export default function PatientSideBar() {
  return (
    <aside className="patient-sidebar">
      <h2 className="sidebar-logo">AVARTANA CARE</h2>

      <nav className="sidebar-menu">
        <NavLink to="/patient-dashboard">
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="/appointments-pat">
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
          <TrendingUp size={20} /> Progress
        </NavLink>

        <NavLink to="/profile-pat">
          <User size={20} /> Profile
        </NavLink>

        <NavLink to="/settings-pat">
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}

import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  Hospital,
  Dumbbell,
  FileText,
  TrendingUp,
  User,
  Settings
} from "lucide-react";

import "../styles/PatientSideBar.css";

export default function PatientSideBar() {
  return (
    <aside className="patient-sidebar">
      <h2 className="sidebar-logo">AVARTANA CARE</h2>

      <nav className="sidebar-menu">
        <NavLink to="/patient-dashboard">
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="/appointments">
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
          <TrendingUp size={20} /> Progress
        </NavLink>

        <NavLink to="/profile">
          <User size={20} /> Profile
        </NavLink>

        <NavLink to="/settings">
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}
