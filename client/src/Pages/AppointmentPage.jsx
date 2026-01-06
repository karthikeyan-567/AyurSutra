import { useState } from "react";
import { Calendar, Clock, User, CheckCircle, Filter } from "lucide-react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
export default function AppointmentsPage() {
  const [filter, setFilter] = useState("All");

  const appointments = [
    { id: 1, name: "Arun Kumar", age: 34, gender: "Male", therapy: "Shirodhara", diagnosis: "Vata imbalance", time: "09:30 AM", date: "05 Jan 2026", status: "Confirmed" },
    { id: 2, name: "Meena S", age: 29, gender: "Female", therapy: "Abhyanga Massage", diagnosis: "Pitta imbalance", time: "11:00 AM", date: "05 Jan 2026", status: "Completed" },
    { id: 3, name: "Kavin Raj", age: 42, gender: "Male", therapy: "Vasti", diagnosis: "Kapha imbalance", time: "02:15 PM", date: "06 Jan 2026", status: "Confirmed" },
    { id: 4, name: "Swetha R", age: 31, gender: "Female", therapy: "Panchakarma Detox", diagnosis: "Vata-Pitta imbalance", time: "07:00 AM", date: "07 Jan 2026", status: "Pending" },
  ];

  const filtered = filter === "All" ? appointments : appointments.filter(a => a.status === filter);

  return (
   
    <div>
      <Sidebar />
      <Navbar />

      <main className="pt-20 pl-72 pr-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-green-700 font-semibold text-2xl">
            <Calendar size={22}/> Appointments
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <Filter className="absolute left-2 top-2 text-green-700" size={16}/>
            <select
              onChange={e => setFilter(e.target.value)}
              className="border rounded-xl pl-7 pr-3 py-1 text-sm focus:outline-green-700 text-gray-600"
            >
              <option value="All">All</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Patients" value={appointments.length} icon={<User />} />
          <StatCard title="Therapies Today" value="8" icon={<ActivityIcon />} />
          <StatCard title="Pending Checkups" value="2" icon={<Clock />} />
          <StatCard title="Completed Today" value="5" icon={<CheckCircle />} />
        </div>

        {/* Appointments List */}
        <div className="grid gap-4">
          {filtered.map(a => (
            <AppointmentCard key={a.id} appointment={a} />
          ))}

          {filtered.length === 0 && (
            <div className="text-gray-400 text-center mt-10">No Appointments</div>
          )}
        </div>
      </main>
    </div>
    
  );
}

/* ---------- UI Components ---------- */

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

function ActivityIcon() {
  return <CheckCircle size={18} />;
}

function AppointmentCard({ appointment }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">

      {/* Doctor attended tag */}
      <div className="flex justify-end mb-3">
        <span className="bg-green-700 text-white text-[11px] font-medium px-3 py-1 rounded-lg flex items-center gap-1">
          <CheckCircle size={12}/> Doctor Attended
        </span>
      </div>

      {/* Patient details */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
          <User size={24}/>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-700">{appointment.name}</h3>
          <p className="text-xs text-gray-500">Age: {appointment.age} • {appointment.gender}</p>
        </div>
      </div>

      {/* Appointment info */}
      <div className="text-sm text-gray-700 space-y-1">
        <p className="flex items-center gap-2"><Clock size={14}/> <strong>Time:</strong> {appointment.time}</p>
        <p className="flex items-center gap-2"><Calendar size={14}/> <strong>Date:</strong> {appointment.date}</p>
        <p><strong className="text-green-700">Therapy:</strong> {appointment.therapy}</p>
        <p><strong className="text-green-700">Diagnosis:</strong> {appointment.diagnosis}</p>
        <p className="mt-2">
          <span className={`px-3 py-1 rounded-full text-xs ${
            appointment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
            appointment.status === "Completed" ? "bg-green-100 text-green-700" :
            "bg-green-50 text-green-700 border"
          }`}>
            {appointment.status}
          </span>
        </p>
      </div>

      {/* View profile */}
      <button className="mt-4 w-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 rounded-xl text-xs font-medium transition">
        View Details
      </button>

    </div>
  );
}
