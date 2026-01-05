import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Settings.css";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    shareReports: false,
    darkMode: false,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="settings-wrapper">
          <h2 className="page-title">Settings</h2>
          <p className="page-sub">Manage your account preferences</p>

          {/* ACCOUNT */}
          <div className="settings-card">
            <h3 className="settings-title">Account</h3>

            <SettingItem
              label="Email Notifications"
              description="Receive updates via email"
              checked={settings.emailNotifications}
              onChange={() => handleToggle("emailNotifications")}
            />

            <SettingItem
              label="SMS Notifications"
              description="Get important alerts via SMS"
              checked={settings.smsNotifications}
              onChange={() => handleToggle("smsNotifications")}
            />
          </div>

          {/* NOTIFICATIONS */}
          <div className="settings-card">
            <h3 className="settings-title">Appointments</h3>

            <SettingItem
              label="Appointment Reminders"
              description="Get reminders before your therapy"
              checked={settings.appointmentReminders}
              onChange={() => handleToggle("appointmentReminders")}
            />
          </div>

          {/* PRIVACY */}
          <div className="settings-card">
            <h3 className="settings-title">Privacy</h3>

            <SettingItem
              label="Share Medical Reports"
              description="Allow doctors to view your reports"
              checked={settings.shareReports}
              onChange={() => handleToggle("shareReports")}
            />
          </div>

          {/* APPEARANCE */}
          <div className="settings-card">
            <h3 className="settings-title">Appearance</h3>

            <SettingItem
              label="Dark Mode"
              description="Enable dark theme (UI only)"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
            />
          </div>

          <button className="btn-primary save-btn" onClick={handleSave}>
            Save Settings
          </button>

          {saved && <p className="save-msg">✅ Settings saved successfully</p>}
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENT */
function SettingItem({ label, description, checked, onChange }) {
  return (
    <div className="setting-item">
      <div>
        <strong>{label}</strong>
        <p>{description}</p>
      </div>

      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
