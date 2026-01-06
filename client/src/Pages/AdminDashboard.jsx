import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import {
  Users,
  FileText,
  Activity,
  Calendar,
  CalendarClock,
  BrainCircuit,
  TrendingUp,
  Hospital,
  Star,
  TicketCheck,
  Bell,
  UserCheck,
  CalendarClockIcon,Download
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Patients", value: 120, icon: <Users size={18} /> },
    { title: "Reports Stored", value: 80, icon: <FileText size={18} /> },
    { title: "Active Therapies", value: "15+", icon: <Activity size={18} /> },
    { title: "Doctors Online", value: 5, icon: <UserCheck size={18} /> },
    { title: "Pending Appointments", value: 12, icon: <CalendarClockIcon size={18} /> },
    { title: "Critical Dosha Alerts", value: 7, icon: <BrainCircuit size={18} /> },
    { title: "Therapy Success Rate", value: "87%", icon: <TrendingUp size={18} /> },
    { title: "Active Clinics", value: 3, icon: <Hospital size={18} /> },
    { title: "Avg Feedback Rating", value: "4.6 ★", icon: <Star size={18} /> }
  ];

  const recentActions = [
    "Added new therapy: Kerala Special Detox",
    "Doctor profile updated: Dr. Arun Kumar",
    "3 new patient reports approved today",
    "New clinic registered in Coimbatore",
    "Patient feedback reviewed & published",
    "Dosha scan anomaly detected & flagged",
    "Seat capacity updated for Clinic #2"
  ];

  return (
    <div className="ml-64 min-h-screen bg-green-50 p-8">
   <AdminNavbar></AdminNavbar>
      <AdminSidebar></AdminSidebar>
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-green-700 mt-16 mb-6 tracking-tight">
        Welcome, Admin
      </h1>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-green-200 rounded-2xl shadow-sm p-5 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
              {s.icon} {s.title}
            </div>
            <div className="text-2xl font-bold text-green-800">{s.value}</div>
          </div>
        ))}
      </div>

      {/* MANAGEMENT CONTAINERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* CLINIC MANAGEMENT */}
        <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <Hospital size={20} /> Clinic Management
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/admin/clinics"><button className="btn-outline">View Clinics</button></Link>
            <button className="btn">Add Clinic</button>
            <button className="btn-outline">Remove Clinic</button>
            <button className="btn">Assign Doctor</button>
          </div>
        </div>

        {/* DOCTOR MONITORING */}
        <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <UserCheck size={20} /> Doctor Monitoring
          </h2>
          <div className="space-y-2 text-sm text-gray-600 font-medium">
            <p>• Live Online/Offline Status</p>
            <p>• Therapy Handling Monitor</p>
            <p>• Response Time Analytics</p>
            <p>• Feedback Score Tracking</p>
          </div>
          <button className="btn-outline mt-4 w-full flex justify-center items-center gap-2">
            <Users size={14}/> View Doctors
          </button>
        </div>

      </div>

      {/* AI INSIGHTS CONTAINER */}
      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
          <BrainCircuit size={20}/> AI Admin Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 font-medium">
          <p>• Dominant Imbalance: Vata</p>
          <p>• Peak Visits: 1PM – 6PM</p>
          <p>• Most Effective Therapy: Abhyanga</p>
          <p>• Risk Flagged Patients: 4</p>
          <p>• Clinic Load High: Evening</p>
          <p>• Report Approval Pending: 6</p>
        </div>
      </div>

      {/* RECENT ACTIONS */}
      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-3">
          <Activity size={20}/> Recent Actions
        </h2>
        <ul className="space-y-2 text-sm text-gray-600 font-medium">
          {recentActions.map((a, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* ADMIN ACTION PANEL */}
      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-3">
          <Bell size={20}/> Admin Controls
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn"><Download size={14}/> Export Reports</button>
          <button className="btn-outline"><TicketCheck size={14}/> Manage Seats</button>
          <button className="btn"><Bell size={14}/> Broadcast Alert</button>
          <button className="btn-outline"><TrendingUp size={14}/> Therapy Trends</button>
        </div>
      </div>

    </div>
  );
}
