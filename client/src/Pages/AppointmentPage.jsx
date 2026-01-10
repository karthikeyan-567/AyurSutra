import { useState, useEffect } from "react";
import { Calendar, Clock, User, CheckCircle, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function AppointmentsPage() {
  const [filter, setFilter] = useState("All");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const data = await api.get('/appointments/my?role=doctor');
      setAppointments(data.appointments);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
              <option value="All">All Status</option>
              <option value="BOOKED">Booked</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Appointments" value={appointments.length} icon={<User />} />
          <StatCard title="Booked" value={appointments.filter(a => a.status === 'BOOKED').length} icon={<ActivityIcon />} />
          <StatCard title="Completed" value={appointments.filter(a => a.status === 'COMPLETED').length} icon={<Clock />} />
          <StatCard title="Cancelled" value={appointments.filter(a => a.status === 'CANCELLED').length} icon={<CheckCircle />} />
        </div>

        {/* Appointments List */}
        <div className="grid gap-4">
          {loading ? (
             <div className="text-center py-10">Loading...</div>
          ) : filtered.map(a => (
            <AppointmentCard key={a._id} appointment={a} />
          ))}

          {!loading && filtered.length === 0 && (
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
        <span className={`text-[11px] font-medium px-3 py-1 rounded-lg flex items-center gap-1 ${
          appointment.status === 'COMPLETED' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          <CheckCircle size={12}/> {appointment.status}
        </span>
      </div>

      {/* Patient details */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
          <User size={24}/>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-700">{appointment.patient?.name}</h3>
          <p className="text-xs text-gray-500">{appointment.patient?.email}</p>
        </div>
      </div>

      {/* Appointment info */}
      <div className="text-sm text-gray-700 space-y-1">
        <p className="flex items-center gap-2"><Clock size={14}/> <strong>Time:</strong> {appointment.appointmentTime}</p>
        <p className="flex items-center gap-2"><Calendar size={14}/> <strong>Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
        <p><strong className="text-green-700">Clinic:</strong> {appointment.clinic?.clinicName}</p>
        <p><strong className="text-green-700">Address:</strong> {appointment.clinic?.address}</p>
      </div>

      {/* View profile */}
      <button className="mt-4 w-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 rounded-xl text-xs font-medium transition">
        View Details
      </button>

    </div>
  );
}
