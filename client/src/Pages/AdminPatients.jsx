import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import { User } from "lucide-react";

export default function AdminPatients() {
  const patients = [
    { id:1, name:"Arun Kumar", age:34, therapy:"Shirodhara", diagnosis:"Vata imbalance", gender:"Male" },
    { id:2, name:"Meena S", age:29, therapy:"Abhyanga", diagnosis:"Pitta imbalance", gender:"Female" },
  ];

  return (
    <div>
      <AdminSidebar />
      <AdminNavbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-xl font-semibold text-green-700 mb-5">Manage Patients</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {patients.map(p => (
            <div key={p.id} className="bg-white border shadow-sm rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <User size={20} className="text-green-700"/>
                <h3 className="text-md font-semibold text-green-700">{p.name}</h3>
              </div>
              <p className="text-xs text-gray-600">Age: {p.age} • {p.gender}</p>
              <p className="text-sm"><strong>Therapy:</strong> {p.therapy}</p>
              <p className="text-sm"><strong>Diagnosis:</strong> {p.diagnosis}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
