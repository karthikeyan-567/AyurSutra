import { User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-center px-6 z-40">
      
       <div className="flex items-center relative right-[450px] gap-3">
        <h1 className="text-xl font-semibold text-green-700 tracking-tight">
          AvartanCare
        </h1>
      </div>
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
