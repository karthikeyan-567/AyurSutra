<<<<<<< HEAD
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
=======
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Brain, Sparkles, TrendingUp } from "lucide-react";

export default function AIInsightsPage() {
  const insights = [
    { id: 1, text: "Vata imbalance detected higher in winter OP cases", impact: "seasonal" },
    { id: 2, text: "Shirodhara shows 22% faster recovery vs avg therapies", impact: "high" },
    { id: 3, text: "Pitta cases peak post 6PM spicy-diet patterns", impact: "medium" },
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

        <main className="pt-24 pl-72 pr-6 max-w-4xl">
          <div className="flex items-center gap-2 text-green-700 text-xl font-semibold mb-6">
            <Brain size={24}/> AI Therapy Insights
          </div>

          {/* Small stat cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
              <Sparkles className="text-green-700" size={18}/>
              <div>
                <p className="text-xs text-gray-500">Insight Accuracy</p>
                <h3 className="text-lg font-semibold text-green-700">87%</h3>
              </div>
            </div>

            <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
              <TrendingUp className="text-green-700" size={18}/>
              <div>
                <p className="text-xs text-gray-500">Therapy Success</p>
                <h3 className="text-lg font-semibold text-green-700">92%</h3>
              </div>
            </div>

            <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
              <TrendingUp className="text-green-700" size={18}/>
              <div>
                <p className="text-xs text-gray-500">Recovery Boost</p>
                <h3 className="text-lg font-semibold text-green-700">22%+</h3>
              </div>
            </div>
          </div>

          {/* Insight feed */}
          <div className="bg-white border rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700 mb-4">
              <TrendingUp size={16}/> Key Observations
            </div>

            <div className="space-y-4">
              {insights.map(i => (
                <motion.div
                  key={i.id}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-gray-700 bg-green-50 p-4 rounded-xl border-l-4 border-green-600"
                >
                  <p>{i.text}</p>
                  <div className="text-[10px] text-green-700 mt-1 flex items-center gap-1">
                    <TrendingUp size={12}/> Impact: {i.impact.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </motion.div>
>>>>>>> 1884859f5c879475243aaf96b7b2d0d24093ed92
  );
}
