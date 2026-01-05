import { FileText, Eye } from "lucide-react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import PageTransition from "../components/PageTransition";
export default function ReportsPage() {
  const reports = [
    { rid: 101, pid: 1, patient: "Arun Kumar", type: "Dosha Diagnosis", date: "02 Jan 2026" },
    { rid: 102, pid: 2, patient: "Meena S", type: "Panchakarma Plan", date: "30 Dec 2025" },
    { rid: 103, pid: 3, patient: "Kavin Raj", type: "Medicine Prescription", date: "25 Dec 2025" },
    { rid: 103, pid: 3, patient: "Kavin Raj", type: "Medicine Prescription", date: "25 Dec 2025" },
  ];

  return (
    <PageTransition>
    <div>
      <Sidebar />
      <Navbar />

      <main className="pt-24 pl-72 pr-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-5">Medical Reports</h2>

        <div className="grid gap-4">
          {reports.map(r => (
            <div key={r.rid} className="bg-white border rounded-2xl shadow-sm p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-700">
                  <FileText size={18}/>
                </div>
                <div>
                  <p className="font-medium text-green-700">{r.type}</p>
                  <p className="text-xs text-gray-500">{r.patient} • {r.date}</p>
                </div>
              </div>

              <button className="flex items-center gap-1 text-green-700 hover:text-green-900 text-sm">
                <Eye size={16}/> View
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
    </PageTransition>
  );
}
