import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";

export default function AdminAppointments() {
  return (
    <div>
      <AdminSidebar />
      <AdminNavbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-xl font-semibold text-green-700 mb-5">Appointments Control</h2>
        <div className="bg-white border rounded-2xl shadow-sm p-5 text-sm text-gray-600">
          📅 View & manage all doctor appointments here<br/>
          🔔 Approve / reschedule functionality later
        </div>
      </main>
    </div>
  );
}
