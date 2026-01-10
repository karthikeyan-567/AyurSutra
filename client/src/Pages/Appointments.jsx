import { useState, useEffect } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Appointments.css";
import { api } from "../services/api";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showGuidance, setShowGuidance] = useState(false);
  const [liveMessageSent, setLiveMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const data = await api.get('/appointments/my?role=patient');
      setAppointments(data.appointments);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const visibleHistory = showAll ? appointments : appointments.slice(0, 3);

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
              <button className="btn-outline">Emergency Call</button>
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

            {loading ? (
              <p className="no-data">Loading appointments...</p>
            ) : visibleHistory.length === 0 ? (
              <p className="no-data">No appointments found</p>
            ) : (
              visibleHistory.map((item, index) => (
                <HistoryItem
                  key={index}
                  therapy={item.clinic?.clinicName || "Therapy"}
                  date={new Date(item.appointmentDate).toLocaleDateString()}
                  time={item.appointmentTime}
                  doctor={item.doctor?.name}
                />
              ))
            )}
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
function HistoryItem({ therapy, date, time, doctor }) {
  return (
    <div className="history-item">
      <div>
        <strong>{therapy}</strong>
        <p>{date} • {time}</p>
      </div>
      <span>{doctor}</span>
    </div>
  );
}
