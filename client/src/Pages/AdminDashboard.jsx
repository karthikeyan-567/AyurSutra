import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import { Users, FileBarChart, Activity, UserCheck } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <AdminSidebar />
      <AdminNavbar />

      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Welcome, Admin</h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <AdminStat title="Total Patients" value="120" icon={<Users size={20}/>} />
          <AdminStat title="Reports Stored" value="80" icon={<FileBarChart size={20}/>} />
          <AdminStat title="Active Therapies" value="15+" icon={<Activity size={20}/>} />
          <AdminStat title="Doctors Online" value="5" icon={<UserCheck size={20}/>} />
        </div>

        {/* Recent Activity Box */}
        <div className="bg-white border shadow-sm rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
            <UserCheck size={18}/> Recent Actions
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔ Added new therapy: <strong>Kerala Special Detox</strong></li>
            <li>✔ Doctor profile updated: <strong>Dr. Arun Kumar</strong></li>
            <li>✔ 3 new patient reports approved today</li>
          </ul>
        </div>

      </main>
    </div>
  );
}

function AdminStat({ title, value, icon }) {
  return (
    <div className="bg-white border shadow-sm rounded-2xl p-4 flex items-center gap-3">
      <div className="text-green-700">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <h3 className="text-lg font-semibold text-green-700">{value}</h3>
      </div>
    </div>
  );
}
