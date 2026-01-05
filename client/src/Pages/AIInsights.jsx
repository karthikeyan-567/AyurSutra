import PageTransition from "../components/PageTransition";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function AIInsights() {
  return (
    <PageTransition>
      <Sidebar />
      <Navbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">AI Insights</h2>
        <div className="bg-white border rounded-2xl shadow-sm p-5 text-sm text-gray-600">
          <p>🌿 Personalized healing suggestions will appear here later.</p>
          <p>🩺 Patient vitals, dosha imbalance, and therapy progress will be analyzed.</p>
          <p>⚡ For now this is a placeholder for future AI integration.</p>
        </div>
      </main>
    </PageTransition>
  );
}
