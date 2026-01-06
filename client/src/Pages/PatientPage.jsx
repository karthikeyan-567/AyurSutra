import { useState } from "react";
import { Users, Activity, Heart, Stethoscope, Search } from "lucide-react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import PatientCard from "../Components/PatientCard";

export default function PatientPage() {
  const [search, setSearch] = useState("");

  const patients = [
    { id: 1, photo: "/avatar.png", name: "Arun Kumar", age: 34, gender: "Male", therapy: "Shirodhara", diagnosis: "Vata imbalance" },
    { id: 2, photo: "/avatar.png", name: "Meena S", age: 29, gender: "Female", therapy: "Abhyanga Massage", diagnosis: "Pitta imbalance" },
    { id: 3, photo: "/avatar.png", name: "Kavin Raj", age: 42, gender: "Male", therapy: "Vasti", diagnosis: "Kapha imbalance" },
    { id: 4, photo: "/avatar.png", name: "Swetha R", age: 31, gender: "Female", therapy: "Panchakarma Detox", diagnosis: "Vata-Pitta imbalance" }
  ];

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  
        
      <div>
        
        <Sidebar />
        <Navbar />

        <main className="pt-20 pl-72 pr-6">
          {/* Attending Count */}
          <div className="text-green-700 font-semibold text-lg mb-5 flex items-center gap-2">
            <Users size={22}/> Patients Attending: {filtered.length}
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <StatCard title="Patients" value={patients.length} icon={<Users size={18}/>} />
            <StatCard title="Therapies" value="12+" icon={<Activity size={18}/>} />
            <StatCard title="Diagnosis Done" value="98" icon={<Stethoscope size={18}/>} />
            <StatCard title="Heart Care" value="24" icon={<Heart size={18}/>} />
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-green-700" size={18}/>
            <input
              type="text"
              placeholder="Search patient..."
              className="w-full border rounded-xl pl-10 pr-4 py-2 focus:outline-green-700"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
          </div>

          {/* Patient Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <PatientCard key={p.id} patient={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-gray-400 text-center mt-10">No patients found</div>
          )}
        </main>
      </div>
   
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white border shadow-sm rounded-2xl p-4 flex items-center gap-2">
      <div className="text-green-700">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <h3 className="text-lg font-semibold text-green-700">{value}</h3>
      </div>
    </div>
  );
}
