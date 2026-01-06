import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Brain, HeartPulse, Leaf, Activity } from "lucide-react";

export default function AIInsightsAltPage() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    setInsights([
      { id: 1, patient: "Swetha", type: "Dosha", text: "Vata imbalance – recommend oil massage + warm meals" },
      { id: 2, patient: "Mukil", type: "Stress", text: "High stress markers – suggest pranayama twice daily" },
      { id: 3, patient: "Ravi", type: "Recovery", text: "Slow muscle recovery – herbal compress and turmeric milk" },
      { id: 4, patient: "Meera", type: "Digestion", text: "Low Agni – ginger-lemon before meals, avoid cold food" },
      { id: 5, patient: "Arun", type: "Dosha", text: "Kapha dominance – light food and post-meal walk suggested" },
      { id: 6, patient: "Riya", type: "Skin", text: "Inflammation detected – neem + turmeric paste recommended" },
    ]);
  }, []);

  const iconMap = {
    Dosha: <Leaf size={18} />,
    Stress: <HeartPulse size={18} />,
    Digestion: <Leaf size={18} />,
    Recovery: <Activity size={18} />,
    Skin: <Brain size={18} />,
    Recovery: <Activity size={18} />
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Navbar doctorName="Karthikeyan J" />

      <main className="ml-64 p-6 pt-20">
        <h1 className="text-3xl font-semibold text-green-700 mb-6">AI Health Insights</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map(i => (
            <div
              key={i.id}
              className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm"
            >
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
                {iconMap[i.type] || <Brain size={18} />}
                {i.type}
              </div>
              <p className="text-xs text-gray-500 mb-1">Patient: <b className="text-green-700">{i.patient}</b></p>
              <p className="text-sm text-gray-700">{i.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
