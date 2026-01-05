import "../styles/PatientNavBar.css";

export default function PatientNavBar() {
  return (
    <div className="patient-navbar">
      <div className="navbar-left">
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Treatment Active</span>
        </div>
        <span className="next-time">Next: Tomorrow 10:00 AM</span>
      </div>

      <div className="navbar-right">
        <div className="bell-wrapper">
          <span className="bell">🔔</span>
          <span className="badge">3</span>
        </div>
        {/* <div className="avatar">PS</div> */}
      </div>
    </div>
  );
}
