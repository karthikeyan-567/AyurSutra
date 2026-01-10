import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/insurance.css";

export default function Insurance() {
  const [showGuidelines, setShowGuidelines] = useState(false);

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="insurance-wrapper">
          <h2 className="page-title">My Insurance</h2>
          <p className="page-sub">
            View your health insurance details and coverage
          </p>

          {/* INSURANCE CARD */}
          <div className="insurance-card">
            <div className="insurance-header">
              <div className="insurance-left">
                <div className="insurance-icon">🛡️</div>
                <div>
                  <h3>HealthCare Plus</h3>
                  <p className="policy-no">Policy No: POL-2024-12345</p>
                </div>
              </div>

              <span className="insurance-status active">Active</span>
            </div>

            <div className="insurance-body">
              <div className="insurance-row">
                <span>Coverage Amount</span>
                <strong>₹5,00,000</strong>
              </div>

              <div className="insurance-row">
                <span>Valid From</span>
                <strong>Jan 01, 2024</strong>
              </div>

              <div className="insurance-row">
                <span>Valid To</span>
                <strong>Dec 31, 2025</strong>
              </div>
            </div>
          </div>

          {/* COVERAGE DETAILS */}
          <div className="insurance-section">
            <h3 className="section-title">Covered Treatments</h3>

            <div className="coverage-list">
              <CoverageItem text="Hospitalization" />
              <CoverageItem text="Surgery" />
              <CoverageItem text="Emergency Care" />
              <CoverageItem text="Diagnostic Tests" />
              <CoverageItem text="Ayurvedic Therapies" />
            </div>
          </div>

          {/* UTILIZATION */}
          <div className="insurance-section">
            <h3 className="section-title">Coverage Utilization</h3>

            <div className="coverage-bar">
              <div className="used" style={{ width: "35%" }}></div>
            </div>

            <p className="coverage-text">
              ₹1,75,000 used out of ₹5,00,000
            </p>
          </div>

          {/* ACTIONS */}
          <div className="insurance-actions">
            <button className="btn-outline">View Policy Document</button>
            <button className="btn-primary">Upload Insurance Card</button>
            <button className="btn-secondary" onClick={() => setShowGuidelines(true)}>Ayushman ID Guidelines</button>
          </div>
        </div>
      </div>

      {/* GUIDELINES POPUP */}
      {showGuidelines && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowGuidelines(false)}>
              ✖
            </button>
            
            <h3 className="modal-title">Ayushman Bharat ID Guidelines</h3>
            <div className="guidelines-list">
              <p>🪪 <strong>Eligibility:</strong> Ensure you are listed in the SECC 2011 database or possess an RSBY card.</p>
              <p>🏥 <strong>Network Hospitals:</strong> Treatments are cashless only at empaneled public and private hospitals.</p>
              <p>📑 <strong>Documents:</strong> Carry your Ayushman Gold Card and Aadhaar Card/Ration Card during hospitalization.</p>
              <p>💰 <strong>Coverage:</strong> Provides coverage up to ₹5 Lakh per family per year for secondary and tertiary care.</p>
              <p>🚫 <strong>Exclusions:</strong> OPD expenses, cosmetic surgeries, and fertility treatments are usually not covered.</p>
            </div>

            <button className="btn-primary full-width" onClick={() => setShowGuidelines(false)}>
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* SMALL COMPONENT */
function CoverageItem({ text }) {
  return (
    <div className="coverage-item">
      <span className="check">✔</span>
      <span>{text}</span>
    </div>
  );
}
