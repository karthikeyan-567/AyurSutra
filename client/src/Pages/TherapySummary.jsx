import { useState, useEffect } from "react";
import DoctorSidebar from "../components/Sidebar";
import DoctorNavbar from "../components/Navbar";

export default function TherapySummaryPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions([
      { id: 1, patient: "Swetha", therapy: "Panchakarma", date: "2026-01-03", notes: "Good progress", outcome: "Improved sleep" },
      { id: 2, patient: "Mukil", therapy: "Herbal Steam", date: "2026-01-04", notes: "Moderate response", outcome: "Reduced stress" }
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      <DoctorSidebar />
      <DoctorNavbar doctorName="Karthikeyan J" />

      <main className="ml-64 p-6 pt-20">
        <h1 className="text-3xl font-semibold text-green-700 mb-6">Therapy Summary</h1>

        <div className="grid gap-4">
          {sessions.map(s => (
            <details key={s.id} className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm">
              <summary className="cursor-pointer font-semibold text-gray-800">
                {s.therapy} — {s.patient} ({s.date})
              </summary>
              <div className="mt-3 text-sm text-gray-600 space-y-2">
                <p><b>Patient:</b> {s.patient}</p>
                <p><b>Date:</b> {s.date}</p>
                <p><b>Notes:</b> {s.notes}</p>
                <p><b>Outcome:</b> {s.outcome}</p>
              </div>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
