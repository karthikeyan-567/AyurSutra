import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export default function PatientFeedback() {
  const feedbacks = [
    { id: 1, patient: "Meera S", msg: "Therapy was relaxing and effective 🌿", status: "positive" },
    { id: 2, patient: "Swetha R", msg: "Nadi diagnosis felt accurate 🩺", status: "positive" },
    { id: 3, patient: "Arun Kumar", msg: "Mild headache after session", status: "attention" },
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

        <main className="pt-24 pl-72 pr-6 bg-gray-50 min-h-screen">
          <div className="flex items-center gap-2 text-green-700 text-2xl font-semibold mb-6">
            <MessageCircle size={24} />
            Patient Feedback
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4 max-w-3xl">
            {feedbacks.map(f => (
              <motion.div
                key={f.id}
                whileHover={{ scale: 1.01 }}
                className="border-b last:border-none pb-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {f.patient}
                  </h3>

                  {f.status === "positive" ? (
                    <CheckCircle size={14} className="text-green-600" />
                  ) : (
                    <AlertCircle size={14} className="text-yellow-600" />
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-1">{f.msg}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
}
