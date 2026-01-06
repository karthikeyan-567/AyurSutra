import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../Components/PageTransition";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { UserRound, Bell, Palette, Shield, LogOut, Download, FileText } from "lucide-react";
import { ThemeContext } from "../Components/ThemeProvider";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light-green");
  const [notifications, setNotifications] = useState(true);

  return (
    <PageTransition>
      <div className="bg-green-50 min-h-screen">
        <Sidebar />
        <Navbar />

        <main className="ml-72 pt-20 px-6 max-w-5xl">
          <h1 className="text-3xl font-semibold text-green-700 mb-6">Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Profile Settings */}
            <SettingCard
              icon={<UserRound size={20} />}
              title="Profile Settings"
              desc="Manage doctor profile and clinic details."
            >
              <Link to="/doc-profile">
                <button className="btn flex items-center gap-2 justify-center">
                  <FileText size={14}/> Edit Profile
                </button>
              </Link>
              <button className="btn-outline flex items-center gap-2 justify-center">
                <Shield size={14}/> Update Clinic Info
              </button>
            </SettingCard>

            {/* Notification Settings */}
            <SettingCard
              icon={<Bell size={20} />}
              title="Notifications"
              desc="Alerts for reports, therapy, and appointments."
            >
              <div className="flex justify-between items-center text-sm text-gray-600">
                Allow Alerts
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="toggle"
                />
              </div>
            </SettingCard>

            {/* Theme Settings */}
            <SettingCard
              icon={<Palette size={20} />}
              title="Theme"
              desc="Switch app theme color."
            >
              <select
  value={theme}
  onChange={e => setTheme(e.target.value)}
  className="w-full border rounded-xl px-3 py-2 text-sm"
>
  <option value="light">Light Theme</option>
  <option value="dark">Dark Theme</option>
</select>
            </SettingCard>

            {/* Security */}
            <SettingCard
              icon={<Shield size={20} />}
              title="Security"
              desc="Authentication and password."
            >
              <button className="btn-outline flex items-center gap-2 justify-center">
                <Shield size={14}/> Change Password
              </button>
              <button className="btn-outline flex items-center gap-2 justify-center">
                <Shield size={14}/> Two-Factor Auth (Future)
              </button>
            </SettingCard>

            {/* Patient Reports */}
            {/* <SettingCard
              icon={<FileText size={20} />}
              title="Scan / Reports"
              desc="Download or manage patient medical PDFs."
            >
              <a href="/reports/dosha_report.pdf" download="Dosha_Scan.pdf">
                <button className="btn-outline flex items-center gap-2 justify-center">
                  <Download size={14}/> Dosha Scan
                </button>
              </a>

              <a href="/reports/blood_panel.pdf" download="Blood_Panel.pdf">
                <button className="btn-outline flex items-center gap-2 justify-center">
                  <Download size={14}/> Blood Report
                </button>
              </a>
            </SettingCard> */}

          </div>

          {/* Logout */}
          <div className="mt-6">
            <SettingCard
              icon={<LogOut size={20} />}
              title="Logout"
              desc="Exit from doctor dashboard."
              fullWidth
            >
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 justify-center">
                <LogOut size={16}/> Logout
              </button>
            </SettingCard>
          </div>

        </main>

        {/* Styles */}
        <style>{`
          .btn {
            background: #15803d;
            color: white;
            padding: 8px 14px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
          }
          .btn-outline {
            border: 1.5px solid #15803d;
            color: #15803d;
            padding: 8px 14px;
            border-radius: 12px;
            font-size: 14px;
            width: 100%;
          }
          .toggle {
            accent-color: #15803d;
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </PageTransition>
  );
}

/* Reusable Card */
function SettingCard({ icon, title, desc, children, fullWidth = false }) {
  return (
    <div className={`bg-white border border-green-200 rounded-2xl shadow-sm p-5 ${fullWidth ? "w-full" : ""}`}>
      <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
        {icon} {title}
      </div>
      <p className="text-xs text-gray-500 mb-3">{desc}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
