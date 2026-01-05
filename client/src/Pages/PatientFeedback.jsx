<<<<<<< HEAD
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
=======
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export default function PatientFeedbackPage() {
  const feedbacks = [
    { id: 1, patient: "Arun Kumar", msg: "Therapy helped, sleep improved", status: "positive" },
    { id: 2, patient: "Meena S", msg: "Mild headache after session", status: "attention" },
    { id: 3, patient: "Kavin Raj", msg: "Pain reduced significantly", status: "positive" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex"
    >
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <main className="pt-24 pl-72 pr-6 max-w-3xl">
          <div className="flex items-center gap-2 text-green-700 text-xl font-semibold mb-6">
            <MessageCircle size={24}/> Patient Feedback
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
            {feedbacks.map(f => (
              <motion.div key={f.id} whileHover={{ scale: 1.01 }} className="border-b pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-700">{f.patient}</h3>
                  {f.status === "positive" ? (
                    <CheckCircle size={14} className="text-green-600"/>
                  ) : (
                    <AlertCircle size={14} className="text-yellow-600"/>
                  )}
                </div>
                <p className="text-xs text-gray-500">Patient: {f.patient}</p>
                <p className="text-sm text-gray-600 mt-1">{f.msg}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </motion.div>
>>>>>>> 1884859f5c879475243aaf96b7b2d0d24093ed92
  );
}
