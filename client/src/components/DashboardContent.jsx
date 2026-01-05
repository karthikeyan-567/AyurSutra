import { User, FileText, CalendarDays } from "lucide-react";
import TabletAlertWidget from "./TabletAlertWidget";
export default function DashboardContent() {
  return (
    <section className="mt-20 ml-64 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold">Welcome,<span className="text-xl font-normal"> Dr.Karthik</span>
        
    </h1>
    
      {/* 🔢 Stats Cards Row */}
      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatsCard title="Appointments" value="24.4K" icon={<CalendarDays />} />
        <StatsCard title="Total Patients" value="186.5K" icon={<User />} />
        <StatsCard title="Reports Generated" value="55.5K" icon={<FileText />} />
        <StatsCard title="Follow-ups" value="26.0K" icon={<FileText />} />
      </div>

      {/* 👥 Recent Patients List */}
      <CardWrapper className="lg:col-span-2">
        <h2 className="text-lg font-semibold text-green-700 mb-4">Recent Patients</h2>
        <ul className="divide-y">
          {[
            "Kavin Raj", "Meera S", "John Peter", "Arun Kumar", "Swetha R"
          ].map((name, i) => (
            <li key={i} className="py-3 flex items-center gap-3 text-gray-700">
              <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <User size={18}/>
              </div>
              {name}
            </li>
          ))}
        </ul>
      </CardWrapper>

      {/* 📊 Report Counts */}
      <div className="space-y-4">
        <CardWrapper>
          <div className="flex items-center gap-3 text-green-700 mb-2">
            <User size={20}/> <span className="font-medium">500+ Users</span>
          </div>
          <p className="text-xs text-gray-500">Trusted Profiles</p>
        </CardWrapper>

        <CardWrapper>
          <div className="flex items-center gap-3 text-green-700 mb-2">
            <FileText size={20}/> <span className="font-medium">19.5k</span>
          </div>
          <p className="text-xs text-gray-500">Therapy Sessions</p>
        </CardWrapper>
      </div>

      {/* 🍩 Gender Distribution + Calendar */}
      <CardWrapper>
        <h3 className="text-md font-semibold text-green-700 mb-3">Gender Stats</h3>
        <div className="flex justify-center">
          {/* Placeholder donut */}
          <div className="w-32 h-32 rounded-full border-8 border-green-700/30 flex items-center justify-center text-green-700 font-semibold">
            60%
          </div>
        </div>
        <div className="text-center mt-3 text-xs text-gray-500">Progerss Chart</div>

        {/* Calendar */}
        <h3 className="text-md font-semibold text-green-700 mt-6 mb-3">Schedule</h3>
        <div className="text-gray-700 text-sm">
          01 Jan 2026 – 07 Jan 2026
        </div>
      </CardWrapper>

      {/* 📅 Mini Calendar */}
      <CardWrapper>
        <h3 className="text-md font-semibold text-green-700 mb-3">Calendar</h3>
        <div className="text-gray-700 text-sm">
          🗓 5 Jan 2026
        </div>
      </CardWrapper>

      {/* 🔔 Reminder Widget */}
      {/* <CardWrapper className="bg-green-50 border-green-700/20">
        <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
          <FileText size={18}/> Next Tablet Alert
        </div>
        <p className="text-xs text-gray-600 mb-3">7:00 AM Daily</p>
        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg text-sm font-medium">
          Update
        </button>
      </CardWrapper> */}
     <TabletAlertWidget/>

    </section>
  );
}

/* ---------- Reusable UI Blocks (Green Minimal) ---------- */

function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white border shadow-sm rounded-2xl p-4 flex items-center gap-3">
      <div className="text-green-700">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <h4 className="text-lg font-semibold text-green-700">{value}</h4>
      </div>
    </div>
  );
}

function CardWrapper({ children, className = "" }) {
  return (
    <div className={`bg-white border shadow-sm rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}
