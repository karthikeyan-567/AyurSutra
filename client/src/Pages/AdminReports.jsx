import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminReports() {
  return (
    <div>
      <AdminSidebar />
      <AdminNavbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-xl font-semibold text-green-700 mb-5">Reports Overview</h2>
        <div className="bg-white border rounded-2xl shadow-sm p-5 text-sm text-gray-600">
          ✔ 80+ reports stored<br/>
          ✔ 25 approved today<br/>
          ✔ Therapy analytics coming soon
        </div>
      </main>
    </div>
  );
}
