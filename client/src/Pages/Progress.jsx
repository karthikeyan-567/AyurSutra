import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Progress.css";

export default function Progress() {
  const todayTasks = [
    { name: "Surya Namaskara", percent: 80 },
    { name: "Pranayama", percent: 60 },
    { name: "Meditation", percent: 100 }
  ];

  const therapyImprovement = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 65 },
    { day: "Fri", value: 85 }
  ];

  const attendance = {
    attended: 8,
    missed: 2
  };

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="progress-wrapper">
          <h2 className="page-title">Progress</h2>
          <p className="page-sub">
            Track your daily activities, therapy improvement and session
            attendance
          </p>

          {/* TODAY TASKS */}
          <div className="progress-card">
            <h3 className="section-title">Today's Tasks</h3>

            {todayTasks.map((task, index) => (
              <div key={index} className="task-row">
                <span>{task.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${task.percent}%` }}
                  ></div>
                </div>
                <strong>{task.percent}%</strong>
              </div>
            ))}
          </div>

          {/* THERAPY IMPROVEMENT */}
          <div className="progress-card">
            <h3 className="section-title">Therapy Improvement</h3>

            <div className="bar-chart">
              {therapyImprovement.map((item, index) => (
                <div key={index} className="bar-item">
                  <div
                    className="bar"
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <span>{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SESSION ATTENDANCE */}
          <div className="progress-card">
            <h3 className="section-title">Session Attendance</h3>

            <div className="attendance-box">
              <div className="attended">
                <h4>{attendance.attended}</h4>
                <p>Sessions Attended</p>
              </div>

              <div className="missed">
                <h4>{attendance.missed}</h4>
                <p>Sessions Missed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
