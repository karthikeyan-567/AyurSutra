import { Home, Users, FileText, Calendar, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm p-6 z-40">
      {/* Brand Name */}
      <h1 className="text-2xl font-semibold text-green-700 mb-8">AyurSutra</h1>

      {/* Menu */}
      <ul className="space-y-5 text-gray-600 font-medium">
        <li className="flex items-center gap-3 hover:text-green-700 cursor-pointer">
          <Home size={20} className="text-green-700" /> Home
        </li>
        <li className="flex items-center gap-3 hover:text-green-700 cursor-pointer">
          <Users size={20} className="text-green-700" /> Patients
        </li>
        <li className="flex items-center gap-3 hover:text-green-700 cursor-pointer">
          <FileText size={20} className="text-green-700" /> Medical Reports
        </li>
        <li className="flex items-center gap-3 hover:text-green-700 cursor-pointer">
          <Calendar size={20} className="text-green-700" /> Appointments
        </li>
        <li className="flex items-center gap-3 hover:text-green-700 cursor-pointer">
          <Settings size={20} className="text-green-700" /> Settings
        </li>
      </ul>
    </aside>
  );
}
