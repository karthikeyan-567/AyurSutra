import { Routes, Route } from "react-router-dom";

import DashboardPage from "./Pages/DashboardPage";
import PatientPage from "./Pages/PatientPage";
import ReportsPage from "./Pages/ReportsPage";
import PatientProfile from "./Pages/PatientProfile";
import AppointmentsPage from "./Pages/AppointmentPage";
import SettingsPage from "./Pages/SettingsPage";
import DoctorProfilePage from "./Pages/DoctorProfilePage";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminPatients from "./Pages/AdminPatients";
import AdminReports from "./Pages/AdminReports";
import AdminAppointments from "./Pages/AdminAppointments";
import AIInsights from "./Pages/AIInsights";
import TherapySummary from "./Pages/TherapySummary";
import PatientFeedback from "./Pages/PatientFeedback";
import DoctorTasksPage from "./Pages/DoctorTasksPage";
import PatientDashBoard from "./Pages/PatientDashBoard";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Doctor */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/patients" element={<PatientPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/patients/:id" element={<PatientProfile />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/doc-profile" element={<DoctorProfilePage />} />
      <Route path="/therapy-summary" element={<TherapySummary />} />
      <Route path="/ai-insights" element={<AIInsights />} />
      <Route path="/patient-feedback" element={<PatientFeedback />} />
      <Route path="/doctor-tasks" element={<DoctorTasksPage />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/patients" element={<AdminPatients />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/appointments" element={<AdminAppointments />} />

      {/* Patient */}
      <Route path="/patient-dashboard" element={<PatientDashBoard />} />
    </Routes>
  );
}
