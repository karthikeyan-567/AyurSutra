import PageTransition from "../components/PageTransition";
import AdminSidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function TherapySummary() {
  return (
    <PageTransition>
      <AdminSidebar />
      <Navbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Therapy Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border rounded-2xl shadow-sm p-4">
            <h3 className="text-green-700 font-semibold mb-2">Total Sessions</h3>
            <p className="text-3xl font-bold text-green-700">19.5K</p>
          </div>
          <div className="bg-white border rounded-2xl shadow-sm p-4">
            <h3 className="text-green-700 font-semibold mb-2">Most Used Therapy</h3>
            <p className="text-xl font-bold text-gray-700">Panchakarma</p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
