import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Leaf, BarChart2 } from "lucide-react";

export default function TherapySummaryPage() {
  const therapies = [
    { name: "Shirodhara", count: 14, trend: "+12%" },
    { name: "Abhyanga Massage", count: 22, trend: "+8%" },
    { name: "Vasti", count: 12, trend: "+5%" },
    { name: "Panchakarma Detox", count: 31, trend: "+20%" },
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

        <main className="pt-24 pl-72 pr-6">
          <div className="flex items-center gap-2 text-green-700 text-xl font-semibold mb-6">
            <Leaf size={24}/> Therapy Summary
          </div>

          {/* Stat row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {therapies.map(t => (
              <div key={t.name} className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
                <Leaf className="text-green-700" size={18}/>
                <div>
                  <p className="text-xs text-gray-500">{t.name}</p>
                  <h3 className="text-lg font-semibold text-green-700">{t.count}</h3>
                  <p className="text-[10px] text-green-600">{t.trend}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Therapy list */}
          <div className="bg-white border rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 font-semibold text-green-700 mb-4">
              <BarChart2 size={18}/> Most Performed Therapies
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              {therapies.map(t => (
                <div key={t.name} className="flex justify-between border-b pb-2">
                  <span>{t.name}</span>
                  <span className="font-medium text-green-700">{t.count} sessions</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
