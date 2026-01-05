import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function PatientFeedback() {
  const [list] = useState([
    { id:1, msg:"Therapy was relaxing and effective 🌿", name:"Meera S" },
    { id:2, msg:"Nadi diagnosis felt accurate 🩺", name:"Swetha R" }
  ]);

  return (
    <PageTransition>
      <Sidebar />
      <Navbar />
      <main className="ml-64 mt-20 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Patient Feedback</h2>
        <div className="space-y-3">
          {list.map(f => (
            <div key={f.id} className="bg-white border rounded-2xl shadow-sm p-4 text-sm text-gray-600">
              <p className="font-medium text-green-700">{f.name}</p>
              <p>{f.msg}</p>
            </div>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
