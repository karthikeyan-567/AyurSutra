import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Insurance.css";

export default function Insurance() {
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
            <button className="btn-secondary">Contact Support</button>
          </div>
        </div>
      </div>
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
