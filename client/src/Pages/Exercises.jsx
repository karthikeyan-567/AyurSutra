import { useState, useEffect } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Exercises.css";

/* ---------------- DATA ---------------- */

const tasks = [
  { id: 1, name: "Surya Namaskara", type: "Yoga", target: 15 },
  { id: 2, name: "Kapalbhati Pranayama", type: "Breathing", target: 10 }
];

const therapies = [
  {
    name: "Abhyanga",
    category: "Massage",
    benefits: ["Reduces stress", "Improves circulation"],
    pre: ["Avoid heavy meals"],
    post: ["Take rest"]
  },
  {
    name: "Shirodhara",
    category: "Relaxation",
    benefits: ["Improves sleep", "Calms mind"],
    pre: ["Avoid caffeine"],
    post: ["Avoid screens"]
  },
  {
    name: "Panchakarma",
    category: "Detox",
    benefits: ["Detox body", "Boost immunity"],
    pre: ["Follow diet"],
    post: ["Rest well"]
  }
];

export default function Exercises() {
  const [activeTab, setActiveTab] = useState("tasks");

  /* TASK TIMER */
  const [runningTask, setRunningTask] = useState(null);
  const [time, setTime] = useState({});
  const [completed, setCompleted] = useState({});

  /* THERAPY */
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  /* TIMER EFFECT */
  useEffect(() => {
    if (!runningTask) return;

    const interval = setInterval(() => {
      setTime((prev) => ({
        ...prev,
        [runningTask]: (prev[runningTask] || 0) + 1
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [runningTask]);

  const stopTask = (id) => {
    setRunningTask(null);
    setCompleted((prev) => ({ ...prev, [id]: true }));
  };

  /* FILTER THERAPY */
  const filteredTherapies = therapies.filter((t) => {
    const matchSearch = t.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchFilter = filter === "All" || t.category === filter;
    return matchSearch && matchFilter;
  });

  const visibleTherapies = showAll
    ? filteredTherapies
    : filteredTherapies.slice(0, 2);

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="exercise-wrapper">
          {/* TABS */}
          <div className="exercise-tabs">
            <button
              className={activeTab === "tasks" ? "tab active" : "tab"}
              onClick={() => setActiveTab("tasks")}
            >
              Today’s Tasks
            </button>
            <button
              className={activeTab === "videos" ? "tab active" : "tab"}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>

          {/* TODAY TASKS */}
          {activeTab === "tasks" &&
            tasks.map((task) => {
              const seconds = time[task.id] || 0;
              const min = Math.floor(seconds / 60);
              const sec = seconds % 60;

              return (
                <div
                  key={task.id}
                  className={`task-card ${
                    completed[task.id] ? "completed" : ""
                  }`}
                >
                  <div>
                    <h4>{task.name}</h4>
                    <p>{task.type}</p>
                    <div className="badges">
                      <span className="badge">
                        {task.target} min
                      </span>
                      <span className="badge green">Beginner</span>
                    </div>
                  </div>

                  <div className="task-right">
                    <span className="timer">
                      {min}m {sec}s
                    </span>

                    {!completed[task.id] &&
                      (runningTask === task.id ? (
                        <button
                          className="btn-stop"
                          onClick={() => stopTask(task.id)}
                        >
                          Stop
                        </button>
                      ) : (
                        <button
                          className="start-btn"
                          onClick={() => setRunningTask(task.id)}
                        >
                          Start
                        </button>
                      ))}

                    {completed[task.id] && (
                      <span className="check">✔</span>
                    )}
                  </div>
                </div>
              );
            })}

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <>
              <input
                className="video-search"
                placeholder="Search yoga or exercise..."
              />
              <div className="video-card">
                <div>
                  <h4>Surya Namaskara</h4>
                  <p>10 min</p>
                </div>
                <button className="start-btn">Watch</button>
              </div>
            </>
          )}

          {/* THERAPY */}
          <h3 className="section-title">Therapies</h3>

          <div className="therapy-filter-bar">
            <input
              className="therapy-search"
              placeholder="Search therapy..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Massage">Massage</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Detox">Detox</option>
            </select>
          </div>

          {visibleTherapies.map((t, i) => (
            <div key={i} className="therapy-card">
              <h4>{t.name}</h4>
              <button
                className="view-btn"
                onClick={() => setSelectedTherapy(t)}
              >
                View Details
              </button>
            </div>
          ))}

          {filteredTherapies.length > 2 && (
            <button
              className="see-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>

      {/* THERAPY MODAL */}
      {selectedTherapy && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedTherapy.name}</h3>

            <h4>Benefits</h4>
            <ul>
              {selectedTherapy.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <h4>Before Therapy</h4>
            <ul>
              {selectedTherapy.pre.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <h4>After Therapy</h4>
            <ul>
              {selectedTherapy.post.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <button
              className="start-btn"
              onClick={() => setSelectedTherapy(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
