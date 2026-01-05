import PageTransition from "../Components/PageTransition";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { User, Bell, Palette, Shield, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SettingsPage() {
  const [theme, setTheme] = useState("Green");
  const [notifications, setNotifications] = useState(true);

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <Sidebar />
        <Navbar />

        <main className="pt-20 pl-72 pr-6 max-w-5xl">
          {/* Header */}
          <h1 className="text-3xl font-semibold text-green-700 mb-6 tracking-tight">
            Settings
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Profile Settings */}
            <SettingCard
              icon={<User size={20} />}
              title="Profile Settings"
              desc="Manage doctor profile details, hospital information, and credentials."
            >
              <Link to='/doc-profile'><button className="btn">Edit Profile</button></Link>
              <button className="btn-outline">Update Hospital Info</button>
            </SettingCard>

            {/* Notification Settings */}
            <SettingCard
              icon={<Bell size={20} />}
              title="Notifications"
              desc="Enable alerts for appointments, medicine reminders, and report updates."
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-gray-600 font-medium">Allow Alerts</span>
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
              desc="Customize dashboard theme."
            >
              <select
                value={theme}
                onChange={e => setTheme(e.target.value)}
                className="w-full border rounded-xl px-3 py-2 text-sm text-gray-600 focus:outline-green-700"
              >
                <option>Green</option>
                <option>Dark Green</option>
                <option>Light Green</option>
              </select>
            </SettingCard>

            {/* Security Settings */}
            <SettingCard
              icon={<Shield size={20} />}
              title="Security"
              desc="Manage login and access permissions."
            >
              <button className="btn-outline flex items-center gap-2">
                <Shield size={16}/> Change Password
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Shield size={16}/> Two-Factor Auth (Future)
              </button>
            </SettingCard>

          </div>

          {/* Logout */}
          <div className="mt-10">
            <SettingCard
              icon={<LogOut size={20} />}
              title="Logout"
              desc="Sign out from the dashboard."
              fullWidth
            >
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                <LogOut size={16}/> Logout
              </button>
            </SettingCard>
          </div>

        </main>

        {/* Tailwind Custom Styles */}
        <style>{`
          .btn {
            background: #15803d;
            color: white;
            padding: 8px 14px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            transition: 0.2s;
            width: 100%;
          }
          .btn:hover {
            background: #166534;
          }
          .btn-outline {
            border: 1.5px solid #15803d;
            color: #15803d;
            padding: 8px 14px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            transition: 0.2s;
            width: 100%;
          }
          .btn-outline:hover {
            background: #15803d;
            color: white;
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

/* ---------- Reusable Setting Card ---------- */
function SettingCard({ icon, title, desc, children, fullWidth = false }) {
  return (
    <div className={`bg-white border rounded-2xl shadow-sm p-5 ${fullWidth ? "w-full" : ""}`}>
      <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
        {icon} {title}
      </div>
      <p className="text-xs text-gray-500 mb-4">{desc}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
