import { Settings, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function AdminSettings() {
  const [mode, setMode] = useState("light");

  return (
    <div className="ml-64 p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <Settings size={26}/> Settings
      </h1>

      <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
          <Palette size={18}/> Theme Mode
        </h2>
        <p className="text-xs text-gray-500 mb-5">Switch between light and dark UI mode.</p>

        <div className="flex gap-4">
          <button onClick={()=>setMode("light")} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${mode==="light"?"border-green-600 text-green-700":"border-gray-300 text-gray-600"}`}>
            <Sun size={16}/> Light
          </button>
          <button onClick={()=>setMode("dark")} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${mode==="dark"?"border-green-600 text-green-700":"border-gray-300 text-gray-600"}`}>
            <Moon size={16}/> Dark
          </button>
        </div>
      </div>
    </div>
  );
}
