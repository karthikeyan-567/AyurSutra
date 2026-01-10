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
      { 
        name: "Triphala Churna", 
        dose: "1 tsp", 
        freq: "Twice daily", 
        days: 30,
        timing: "Morning & Evening, after meals",
        precautions: ["Avoid spicy food", "Take with warm water"],
        postcautions: ["Wait 30 mins before sleeping"],
        description: "A traditional Ayurvedic herbal formula consisting of three fruits (Amalaki, Bibhitaki, and Haritaki) known for its digestive and detoxifying properties.",
        uses: "Supports digestion, regular bowel movements, and overall detoxification."
      },
      { 
        name: "Ashwagandha Capsules", 
        dose: "500mg", 
        freq: "Once daily", 
        days: 60,
        timing: "Night, before bedtime",
        precautions: ["Avoid cold beverages"],
        postcautions: ["Rest for 10 mins after intake"],
        description: "An adaptogenic herb that helps the body manage stress and improves vitality and energy levels.",
        uses: "Reduces stress, improves sleep quality, and boosts immunity."
      }
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
      { 
        name: "Brahmi Tablets", 
        dose: "1 tab", 
        freq: "Once daily", 
        days: 30,
        timing: "Morning, empty stomach",
        precautions: ["Consistent timing"],
        postcautions: ["Avoid caffeine for 1 hour"],
        description: "A powerful brain tonic that promotes mental clarity, focus, and memory enhancement.",
        uses: "Enhances cognitive function, reduces anxiety, and supports nerve health."
      }
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
                  <div key={i} className="medication-card-inner">
                    <div className="medication-item-header">
                      <div className="medication-main-info">
                        <strong>{m.name}</strong>
                        <span className="medication-meta">{m.dose} · {m.freq}</span>
                      </div>
                      <span className="days-pill">{m.days} days</span>
                    </div>

                    {/* NEW: Info & Uses section */}
                    <div className="medication-info-section">
                       <p className="medication-description">
                         <strong>Info:</strong> {m.description}
                       </p>
                       <p className="medication-uses">
                         <strong>Use:</strong> {m.uses}
                       </p>
                    </div>
                    
                    <div className="medication-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">🕒 Timing</span>
                        <p className="detail-content">{m.timing}</p>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">⚠️ Precautions</span>
                        <div className="pill-container">
                          {m.precautions.map((pre, pi) => (
                            <span key={pi} className="caution-pill precaution">{pre}</span>
                          ))}
                        </div>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">🧘 Post-cautions</span>
                        <div className="pill-container">
                          {m.postcautions.map((post, psi) => (
                            <span key={psi} className="caution-pill postcaution">{post}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INSTRUCTIONS */}
              <h4 className="section-label">📄 Doctor's Notes</h4>
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
                  👁 View Summary
                </button>
                <button className="btn-outline">🖨 Print</button>
                <button className="btn-outline">📨 Resend</button>
              </div>

              {/* EXPANDED DETAILS */}
              {expanded === index && (
                <div className="expanded-details">
                  <h4>📋 Full Prescription Summary</h4>
                  <div className="summary-grid">
                    <p><strong>Patient:</strong> {p.patient}</p>
                    <p><strong>Doctor:</strong> {p.doctor}</p>
                    <p><strong>Status:</strong> {p.status}</p>
                    <p><strong>Valid Until:</strong> {p.expires}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
