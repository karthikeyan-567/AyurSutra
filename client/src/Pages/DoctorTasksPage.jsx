import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import PageTransition from "../Components/PageTransition";
import { Users, ClipboardList, Activity, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function DoctorTasksPage() {
  const tasks = [
    { id: 1, title: "Review patient therapy progress", status: "pending" },
    { id: 2, title: "Approve new Panchakarma session plan", status: "completed" },
    { id: 3, title: "Generate daily OP summary report", status: "in-progress" },
    { id: 4, title: "Check Nadi diagnosis for follow-up patients", status: "pending" },
  ];

  const stats = {
    attending: 4,
    therapies: 12,
    reports: 98,
    followUps: 24,
  };

  return (
    <PageTransition>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar onMenuClick={() => {}} />

          <main className="pt-24 pl-72 pr-6 w-full">
            {/* Patient attending count */}
            <div className="flex items-center gap-2 mb-6 text-green-700 font-semibold text-lg">
              <Users size={22} /> Patients Attending: {stats.attending}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
                <ClipboardList className="text-green-700" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Therapies</p>
                  <h3 className="text-lg font-semibold text-green-700">{stats.therapies}+</h3>
                </div>
              </div>

              <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
                <Activity className="text-green-700" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Active Therapies</p>
                  <h3 className="text-lg font-semibold text-green-700">{stats.therapies}</h3>
                </div>
              </div>

              <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
                <FileText className="text-green-700" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Reports Done</p>
                  <h3 className="text-lg font-semibold text-green-700">{stats.reports}</h3>
                </div>
              </div>

              <div className="bg-white border rounded-2xl shadow-sm p-4 flex items-center gap-2">
                <CheckCircle className="text-green-700" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Follow Ups</p>
                  <h3 className="text-lg font-semibold text-green-700">{stats.followUps}</h3>
                </div>
              </div>
            </div>

            {/* Doctor tasks list */}
            <div className="bg-white border rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <ClipboardList size={22} /> Today's Doctor Tasks
              </h2>

              <div className="space-y-3">
                {tasks.map(task => (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <ClipboardList size={16} className="text-green-700" /> {task.title}
                    </p>

                    <span
                      className={`text-[10px] font-semibold px-2 py-1 rounded-lg ${
                        task.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {task.status.toUpperCase()}
                    </span>
                  </motion.div>
                ))}

                {tasks.length === 0 && (
                  <p className="text-gray-400 text-center">No tasks available today</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}
