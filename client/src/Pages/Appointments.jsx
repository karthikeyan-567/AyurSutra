import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Appointments.css";

export default function Appointments() {
  const [showAll, setShowAll] = useState(false);
  const [showGuidance, setShowGuidance] = useState(false);
  const [liveMessageSent, setLiveMessageSent] = useState(false);

  const historyData = [
    { therapy: "Shirodhara", date: "Dec 01, 2025", doctor: "Dr. Mukil S" },
    { therapy: "Udvartana", date: "Nov 25, 2025", doctor: "Dr. Mukil S" },
    { therapy: "Abhyanga", date: "Nov 15, 2025", doctor: "Dr. Mukil S" },
    { therapy: "Nasya", date: "Nov 05, 2025", doctor: "Dr. Mukil S" },
    { therapy: "Pizhichil", date: "Oct 28, 2025", doctor: "Dr. Mukil S" },
  ];

  const visibleHistory = showAll ? historyData : historyData.slice(0, 3);

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="appointments-content">
          <h2 className="page-title">Appointments</h2>
          <p className="page-sub">
            Consult with your doctor and track appointment history
          </p>

          {/* LIVE CONSULTANCY */}
          <div className="card live-card">
            <div>
              <h3 className="card-title">🟢 Live Consultancy</h3>
              <p className="live-doctor">Dr. Mukil S</p>
              <span className="live-status">Available Online</span>
            </div>

            <div className="live-actions">
              <button
                className="btn-primary"
                onClick={() => setLiveMessageSent(true)}
              >
                Join Live Session
              </button>
            </div>
          </div>

          {/* UPCOMING APPOINTMENT */}
          <div className="card">
            <h3 className="card-title">Upcoming Appointment</h3>

            <div className="upcoming-card">
              <div className="therapy-icon">🌿</div>

              <div className="upcoming-details">
                <h4>Abhyanga Therapy</h4>
                <p>Tomorrow · 10:00 AM · 60 min</p>
                <span>With Dr. Mukil S</span>
              </div>

              <div className="upcoming-actions">
                <button
                  className="btn-outline"
                  onClick={() => setShowGuidance(true)}
                >
                  Pre-Guide
                </button>
              </div>
            </div>
          </div>

          {/* APPOINTMENT HISTORY */}
          <div className="card">
            <div className="history-header">
              <h3 className="card-title">Appointment History</h3>
              <button
                className="see-all"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "See All"}
              </button>
            </div>

            {visibleHistory.map((item, index) => (
              <HistoryItem
                key={index}
                therapy={item.therapy}
                date={item.date}
                doctor={item.doctor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PRE-THERAPY GUIDANCE MODAL */}
      {showGuidance && (
        <div className="modal-overlay">
          <div className="modal guidance-modal">
            <h3>Pre-Therapy Guidance</h3>
            <p className="guidance-sub">
              Please follow these instructions before therapy
            </p>

            <ul className="guidance-list">
              <li>Avoid heavy meals at least 2 hours before therapy</li>
              <li>Drink warm water before arriving</li>
              <li>Avoid caffeine and alcohol on the therapy day</li>
              <li>Wear loose and comfortable clothing</li>
              <li>Inform the therapist if you feel unwell</li>
            </ul>

            <button
              className="btn-primary"
              onClick={() => setShowGuidance(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* LIVE SESSION MESSAGE CONFIRMATION */}
      {liveMessageSent && (
        <div className="modal-overlay">
          <div className="modal success-modal">
            <h3>Message Sent</h3>
            <p>
              Your request to join the live session has been sent to the clinic.
            </p>

            <button
              className="btn-primary"
              onClick={() => setLiveMessageSent(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* HISTORY ITEM */
function HistoryItem({ therapy, date, doctor }) {
  return (
    <div className="history-item">
      <div>
        <strong>{therapy}</strong>
        <p>{date}</p>
      </div>
      <span>{doctor}</span>
    </div>
  );
}
