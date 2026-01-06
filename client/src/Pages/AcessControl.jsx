import { ShieldCheck, LockKeyhole } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
export default function AccessControl() {
  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
    
 <AdminNavbar></AdminNavbar>    
     <AdminSidebar></AdminSidebar>
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <ShieldCheck size={26}/> Access Control
      </h1>

      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
          <LockKeyhole size={18}/> Manage Permissions
        </h2>
        <p className="text-xs text-gray-500 mb-5">Control system access for doctors, staff, and admins.</p>

        <div className="space-y-4">
          {[
            { role: "Admin", access: "Full system access", color: "text-green-600" },
            { role: "Doctor", access: "Access to therapy, patient reports", color: "text-blue-600" },
            { role: "Staff", access: "Appointments & seat updates only", color: "text-yellow-600" }
          ].map((r,i)=>(
            <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between items-center">
              <div>
                <h3 className={`text-sm font-semibold ${r.color}`}>{r.role}</h3>
                <p className="text-xs text-gray-600">{r.access}</p>
              </div>
              <button className="border border-green-600 text-green-700 px-3 py-1.5 rounded-lg text-xs hover:bg-green-600 hover:text-white transition">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
