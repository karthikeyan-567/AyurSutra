import PageTransition from "../components/PageTransition";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";

export default function AdminTasks() {
  return (
    <PageTransition>
      <AdminSidebar />
      <AdminNavbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Doctor Tasks</h2>
        <div className="bg-white border rounded-2xl shadow-sm p-5 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>✔ Review new patient intakes</li>
            <li>✔ Approve therapy plans</li>
            <li>✔ Monitor sensor health data</li>
            <li>✔ Validate reports & diagnosis</li>
          </ul>
        </div>
      </main>
    </PageTransition>
  );
}
