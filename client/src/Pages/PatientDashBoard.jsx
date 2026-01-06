import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/PatientDashboard.css";
import { NavLink } from "react-router-dom";
export default function PatientDashBoard() {
  return (
    <div className="patient-dashboard">

      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="patient-content">

          <h2 className="welcome-title">Welcome, Karthi</h2>

          {/* TOP GRID */}
          <div className="grid-2">

            {/* CURRENT TREATMENT */}
            <div className="card">
              <h3 className="card-title">🌿 Current Treatment</h3>
              <p className="program-name">Panchakarma Detox Program</p>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-text">65% Completed</span>

              <div className="phases">
                <Phase n="1" title="Purvakarma" desc="Preparatory therapies" active />
                <Phase n="2" title="Pradhanakarma" desc="Main detoxification" active />
                <Phase n="3" title="Paschatkarma" desc="Post-treatment care" />
              </div>
            </div>

            {/* NEXT APPOINTMENT */}
            <div className="card">
              <h3 className="card-title">📅 Next Appointment</h3>

              <div className="appointment-box">
                <strong>Tomorrow, 10:00 AM</strong>
                <span>With Dr. Mukil </span>
              </div>
<NavLink to="/patient-appointments">

              <button className="outline-btn">
                View All Appointments →
              </button>
              </NavLink>
            </div>

          </div>

          {/* MIDDLE GRID */}
          <div className="grid-2">

            {/* UPCOMING SESSIONS */}
            <div className="card">
              <h3 className="card-title">Upcoming Sessions</h3>

              <Session
                name="Abhyanga"
                time="Tomorrow · 60 min"
                doctor="Dr. Mukil S"
              />
              <Session
                name="Shirodhara"
                time="Dec 12 · 45 min"
                doctor="Dr. Prasanth M"
              />
            </div>

            {/* RECENT VITALS */}
            <div className="card">
              <h3 className="card-title">Recent Vitals</h3>

              <Vital label="Blood Pressure" value="118/78" />
              <Vital label="Body Temperature" value="98.4°F" />
              <Vital label="Pulse Rate" value="72 bpm" />
              <Vital label="Hydration Level" value="Good" />
            </div>

          </div>

          {/* 🔔 RECENT NOTIFICATIONS (INSIDE DASHBOARD) */}
          <div className="card notifications-card">
            <h3 className="card-title">🔔 Recent Notifications</h3>

            <Notification
              text="Appointment reminder: Abhyanga session tomorrow at 10:00 AM"
              time="2 hours ago"
            />
            <Notification
              text="Your treatment progress report is ready for review"
              time="1 day ago"
            />
            <Notification
              text="Please maintain your prescribed diet routine"
              time="2 days ago"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */

const Phase = ({ n, title, desc, active }) => (
  <div className={`phase ${active ? "active" : ""}`}>
    <span>{n}</span>
    <p>{title}<br /><small>{desc}</small></p>
  </div>
);

const Session = ({ name, time, doctor }) => (
  <div className="session-item">
    <div>
      <strong>{name}</strong>
      <p>{time}</p>
      <span>{doctor}</span>
    </div>
    <span className="arrow">›</span>
  </div>
);

const Vital = ({ label, value }) => (
  <div className="vital-item">
    <span>{label}</span>
    <span className="vital-pill">{value}</span>
  </div>
);

const Notification = ({ text, time }) => (
  <div className="notification-row">
    <div className="notification-icon">🔔</div>
    <div>
      <p>{text}</p>
      <span>{time}</span>
    </div>
  </div>
);
