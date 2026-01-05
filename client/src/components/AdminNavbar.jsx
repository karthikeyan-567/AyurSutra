import { User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-center px-6 z-40">
      <marquee scrollamount="4" className="text-sm font-medium text-green-700 w-[50%] text-center">
        🌿 AyurSutra Admin Panel • Manage Doctors, Patients & Therapies
      </marquee>

      <div className="absolute right-6 flex items-center gap-2 text-green-700">
        <User size={20}/>
        <span className="text-sm font-medium text-gray-700">Admin</span>
      </div>
    </nav>
  );
}
