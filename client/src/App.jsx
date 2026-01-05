import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import PatientPage from "./Pages/PatientPage";
import ReportsPage from "./Pages/ReportsPage";
import PatientProfile from "./Pages/PatientProfile";
import PageTransition from "./Components/PageTransition";
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
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DoctorTasksPage from "./Pages/DoctorTasksPage";

// import AdminSettings from "./Pages/AdminSettings";
export default function App() {
  return (
    <Router>
      <PageTransition>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/patients/:id" element={<PatientProfile />} />

          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/doc-profile" element={<DoctorProfilePage />} />  
          
          <Route path="/appointments" element={<AppointmentsPage />} />
        
           <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/patients" element={<AdminPatients />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        {/* <Route path="/admin/settings" element={<AdminSettings />} /> */}
        <Route path="/therapysum" element={<TherapySummary></TherapySummary>}></Route>
        <Route path="/Insights" element={<AIInsights></AIInsights>}></Route>
        <Route path="/feedback-doc" element={<PatientFeedback></PatientFeedback>}></Route>
        <Route path="/doc-task" element={<DoctorTasksPage />} />

        </Routes>
      </PageTransition>
    </Router>
  );
}
