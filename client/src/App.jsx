<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import PatientDashBoard from "./Pages/PatientDashBoard";
import Appointments from "./Pages/Appointments";
import Clinics from "./Pages/Clinics";
import Exercises from "./Pages/Exercises";
import Prescriptions from "./Pages/Prescriptions";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings"; 
import Progress from "./Pages/Progress"; 
function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/patient-dashboard" />} />
      
      <Route path="/patient-dashboard" element={<PatientDashBoard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/clinics" element={<Clinics />} />
           <Route path="/exercises" element={<Exercises />} />
           <Route path="/prescriptions" element={<Prescriptions />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/settings" element={<Settings />} />
            <Route path="/progress" element={<Progress />} />

    
    </Routes>
  );
}

export default App;
=======
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

=======
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

>>>>>>> 1884859f5c879475243aaf96b7b2d0d24093ed92
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
<<<<<<< HEAD
>>>>>>> 194efee8d3db073e0cae3064b9dd469f032ded22
=======
>>>>>>> 1884859f5c879475243aaf96b7b2d0d24093ed92
