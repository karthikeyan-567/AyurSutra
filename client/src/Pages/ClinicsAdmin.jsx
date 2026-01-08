import { Building2, MapPin, Stethoscope } from "lucide-react";
import AdminSibebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function ClinicsAdmin() {
  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
     
      <AdminNavbar></AdminNavbar>
       < AdminSibebar></AdminSibebar>
    
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <Building2 size={26} /> Clinics Overview
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "AyurSutra Chennai", city: "Chennai", doctors: 5, status: "Active" },
          { name: "AyurSutra Ooty", city: "Ooty", doctors: 3, status: "Active" },
          { name: "AyurSutra Coimbatore", city: "Coimbatore", doctors: 4, status: "Maintenance" },
        ].map((clinic, i) => (
          <div key={i} className="bg-white border border-green-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-green-800">{clinic.name}</h2>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <MapPin size={12} /> {clinic.city}, Tamil Nadu
            </p>

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Stethoscope size={14}/> Doctors: <strong>{clinic.doctors}</strong></p>
              <p>Status: <span className={`font-medium ${clinic.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>{clinic.status}</span></p>
            </div>

            <button className="mt-4 w-full border border-green-600 text-green-700 py-2 rounded-xl text-sm font-medium hover:bg-green-600 hover:text-white transition">
              Manage Clinic
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
