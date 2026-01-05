import { useState } from "react";
import { CheckCircle, Bell, BellOff } from "lucide-react";

export default function TabletAlertWidget() {
  const [time, setTime] = useState("07:00 AM");
  const [enabled, setEnabled] = useState(true);
  const [completed, setCompleted] = useState(false);
  const attendedCount = 4; // dummy now, replace later with API

  const updateTime = (e) => setTime(e.target.value);

  const toggle = () => {
    setEnabled(!enabled);
    showToast(!enabled ? "Reminder Enabled" : "Reminder Disabled");
  };

  const markDone = () => {
    setCompleted(true);
    setCompleted(true);
    showToast("Marked as completed for today");
  };

  const resetDone = () => {
    setCompleted(false);
    showToast("Reset completion status");
  };

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-5 max-w-sm">
      
      {/* Header */}
      <div className="flex items-center gap-2 text-green-700 font-semibold text-lg mb-2">
        {completed ? <CheckCircle size={20}/> : <Bell size={20}/>}
        Next Appointment Alert
      </div>

      {/* Subtitle */}
      <p className="text-xs text-gray-500 mb-3">7:00 AM Daily • Patients Attended: {attendedCount}</p>

      {/* Input */}
      <input
        type="text"
        value={time}
        onChange={updateTime}
        className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-green-700"
      />

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button onClick={toggle} className="flex-1 bg-green-100 text-green-700 py-2 rounded-xl text-xs font-medium hover:bg-green-200 transition">
          {enabled ? <span className="flex justify-center items-center gap-1"><BellOff size={14}/> Disable</span> : <span className="flex justify-center items-center gap-1"><Bell size={14}/> Enable</span>}
        </button>

        {completed ? (
          <button onClick={resetDone} className="flex-1 border border-green-700 text-green-700 py-2 rounded-xl text-xs font-medium hover:bg-green-700 hover:text-white transition">
            Reset
          </button>
        ) : (
          <button onClick={markDone} className="flex-1 border border-green-700 text-green-700 py-2 rounded-xl text-xs font-medium hover:bg-green-700 hover:text-white transition">
            Done
          </button>
        )}
      </div>

      {/* Footer */}
      <button className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl text-sm font-medium transition">
        Update
      </button>

      {/* Tiny attending stat */}
      <div className="mt-3 text-center text-[10px] text-gray-400">
        👨‍⚕️ {attendedCount} patients reviewed today
      </div>
    </div>
  );
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.innerText = msg;
  toast.className =
    "fixed bottom-5 right-5 bg-green-700 text-white text-xs px-3 py-2 rounded-lg shadow-sm opacity-90";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
