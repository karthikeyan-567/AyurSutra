import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Progress.css";

export default function Progress() {
  const [showReport, setShowReport] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");

  const dailyTasks = [
    { name: "Surya Namaskara", percent: 80 },
    { name: "Pranayama", percent: 60 },
    { name: "Meditation", percent: 100 }
  ];

  const therapyProgress = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 65 },
    { day: "Fri", value: 85 },
    { day: "Sat", value: 90 }
  ];

  const doctorReport = [
    "Vata-Pitta imbalance improving",
    "Better sleep and digestion",
    "Stress levels reduced",
    "Continue Abhyanga & Pranayama"
  ];

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="progress-wrapper">
          <h2 className="page-title">Progress</h2>
          <p className="page-sub">
            Track your daily improvement, therapy progress & reports
          </p>

          {/* DAILY TASKS PROGRESS */}
          <div className="progress-card">
            <h3 className="section-title">Daily Tasks Progress</h3>

            {dailyTasks.map((task, index) => (
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

          {/* THERAPY PROGRESS */}
          <div className="progress-card">
            <h3 className="section-title">Therapy Improvement</h3>

            <div className="bar-chart">
              {therapyProgress.map((item, index) => (
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

          {/* REPORT SECTION */}
          <div className="progress-card">
            <h3 className="section-title">Ayurveda Therapy Report</h3>

            <div className="report-row">
              <p>Doctor Review Report</p>

              <button
                className="icon-btn"
                onClick={() => setShowReport(true)}
              >
                👁 View
              </button>
            </div>

            <div className="upload-box">
              <label>
                Upload Your Body Checkup Report
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  hidden
                  onChange={handleUpload}
                />
              </label>

              {uploadedFile && (
                <p className="upload-success">
                  ✅ {uploadedFile} uploaded successfully
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* REPORT MODAL */}
      {showReport && (
        <div className="modal-overlay">
          <div className="modal report-modal">
            <h3>Doctor Therapy Report</h3>
            <p className="modal-meta">
              Dr. Mukil S · Ayurveda Specialist
            </p>

            <ul className="report-list">
              {doctorReport.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button
              className="btn-primary"
              onClick={() => setShowReport(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
