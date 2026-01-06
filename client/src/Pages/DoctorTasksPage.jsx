import { useState, useEffect } from "react";
import DoctorSidebar from "../components/Sidebar";
import DoctorNavbar from "../components/Navbar";
import { CheckCircle, Clock } from "lucide-react";

export default function DoctorTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Demo data (replace with API later)
    setTasks([
      { id: 1, title: "Check patient vitals", patient: "Swetha", status: "pending" },
      { id: 2, title: "Review therapy progress", patient: "Mukil", status: "completed" },
      { id: 3, title: "Update treatment plan", patient: "Arun", status: "pending" },
    ]);
  }, []);

  const toggleStatus = (id) => {
    setTasks(tasks.map(t =>
      t.id === id
        ? { ...t, status: t.status === "pending" ? "completed" : "pending" }
        : t
    ));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter !== "all" && t.status !== filter) return false;
    if (!t.title.toLowerCase().includes(search.toLowerCase()) &&
        !t.patient.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <DoctorSidebar />
      <DoctorNavbar doctorName="Karthikeyan J" />

      <main className="ml-64 p-6 pt-20">
        <h1 className="text-3xl font-semibold text-green-700 mb-6">Doctor Tasks</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search tasks or patient..."
          className="w-full p-3 rounded-xl border border-green-200 shadow-sm mb-5 focus:outline-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          {["all", "pending", "completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl capitalize transition ${
                filter === f ? "bg-green-200 text-green-700" : "bg-white hover:bg-green-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="grid gap-4">
          {filteredTasks.length === 0 && (
            <p className="text-gray-600 text-center mt-10">No tasks found</p>
          )}

          {filteredTasks.map(task => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                <p className="text-sm text-gray-600">Patient: {task.patient}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  {task.status === "pending" ? <Clock size={14}/> : <CheckCircle size={14}/>}
                  {task.status}
                </div>
              </div>

              <button
                onClick={() => toggleStatus(task.id)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-1 hover:bg-green-700"
              >
                <CheckCircle size={16}/> 
                {task.status === "pending" ? "Complete" : "Undo"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
