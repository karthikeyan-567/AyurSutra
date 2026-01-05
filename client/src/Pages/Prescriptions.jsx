import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Prescriptions.css";

const prescriptions = [
  {
    patient: "Karthi J",
    doctor: "Dr. Mukil S",
    date: "2024-12-10",
    expires: "2025-01-10",
    status: "active",
    medications: [
      { name: "Triphala Churna", dose: "1 tsp", freq: "Twice daily", days: 30 },
      { name: "Ashwagandha Capsules", dose: "500mg", freq: "Once daily", days: 60 }
    ],
    instructions: "Take with warm water after meals. Avoid spicy foods."
  },
  {
    patient: "Karti J",
    doctor: "Dr. Mukil S",
    date: "2024-09-01",
    expires: "2024-10-01",
    status: "completed",
    medications: [
      { name: "Brahmi Tablets", dose: "1 tab", freq: "Once daily", days: 30 }
    ],
    instructions: "Take before bedtime. Maintain proper sleep routine."
  }
];

export default function Prescription() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="prescription-wrapper">
          <h2 className="page-title">Prescriptions</h2>
          <p className="page-sub">
            Manage prescriptions for Karthi J
          </p>

          {prescriptions.map((p, index) => (
            <div key={index} className="prescription-box">
              {/* HEADER */}
              <div className="prescription-header">
                <div className="meta">
                  <span>👨‍⚕️ {p.doctor}</span>
                  <span>📅 {p.date}</span>
                  <span>⏳ Expires: {p.expires}</span>
                </div>

                <span className={`status-pill ${p.status}`}>
                  {p.status}
                </span>
              </div>

              {/* MEDICATIONS */}
              <h4 className="section-label">💊 Medications</h4>
              <div className="medication-list">
                {p.medications.map((m, i) => (
                  <div key={i} className="medication-item">
                    <span>
                      <strong>{m.name}</strong> &nbsp;
                      {m.dose} · {m.freq}
                    </span>
                    <span className="days-pill">{m.days} days</span>
                  </div>
                ))}
              </div>

              {/* INSTRUCTIONS */}
              <h4 className="section-label">📄 Instructions</h4>
              <div className="instructions-box">
                {p.instructions}
              </div>

              {/* ACTIONS */}
              <div className="actions">
                <button
                  className="btn-outline"
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                >
                  👁 View Full
                </button>
                <button className="btn-outline">🖨 Print</button>
                <button className="btn-outline">📨 Resend</button>
              </div>

              {/* EXPANDED DETAILS */}
              {expanded === index && (
                <div className="expanded-details">
                  <h4>📋 Full Prescription Details</h4>
                  <p>
                    <strong>Patient:</strong> {p.patient}
                  </p>
                  <p>
                    <strong>Doctor:</strong> {p.doctor}
                  </p>
                  <p>
                    <strong>Status:</strong> {p.status}
                  </p>
                  <p>
                    <strong>Valid Until:</strong> {p.expires}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
