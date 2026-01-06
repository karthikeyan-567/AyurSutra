import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
// Patient Pages
import PatientDashBoard from "./Pages/PatientDashBoard";
import Appointments from "./Pages/Appointments";
import Clinics from "./Pages/Clinics";
import Exercises from "./Pages/Exercises";
import Prescriptions from "./Pages/Prescriptions";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Progress from "./Pages/Progress";
import SeatAvailability from "./Pages/SeatAvailability";
import LandingPage from "./Pages/LandingPage";  
import Insurance from "./Pages/insurance";

// Doctor / Admin Pages
import DashboardPage from "./Pages/DashboardPage";
import PatientPage from "./Pages/PatientPage";
import ReportsPage from "./Pages/ReportsPage";
import PatientProfile from "./Pages/PatientProfile";
import AppointmentsPage from "./Pages/AppointmentPage";
import SettingsPage from "./Pages/SettingsPage";
import DoctorProfilePage from "./Pages/DoctorProfilePage";
import DoctorTasksPage from "./Pages/DoctorTasksPage";

// Admin
import AdminDashboard from "./Pages/AdminDashboard";
import AdminPatients from "./Pages/AdminPatients";
import AdminReports from "./Pages/AdminReports";
import AdminAppointments from "./Pages/AdminAppointments";
import ClinicsAdmin from "./Pages/Clinics";
import Doctors from "./Pages/Doctors";
import Seatav from "./Pages/Seatav";
import AccessControl from "./Pages/AcessControl";
import Notifications from "./Pages/Notification";
import AdminSettings from "./Pages/AdminSettings";  



// Auth & AI
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AIInsights from "./Pages/AIInsights";
import TherapySummary from "./Pages/TherapySummary";
import PatientFeedback from "./Pages/PatientFeedback";
import DoctorSeat from "./Pages/DoctorSeat";
// Animation
import PageTransition from "./Components/PageTransition";

export default function App() {
  return (
     
   
       <ThemeProvider>
      <Routes>

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />


        {/* Default */}
        <Route path="/" element={<Navigate to="/landing" />} />

        {/* Doctor */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/patients/:id" element={<PatientProfile />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/doc-profile" element={<DoctorProfilePage />} />
        <Route path="/doc-task" element={<DoctorTasksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/doc-availability" element={<DoctorSeat />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/patients" element={<AdminPatients />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
  <Route path="/adclinics" element={<ClinicsAdmin/>}/>
  <Route path="/doctors" element={<Doctors/>}/>
  <Route path="/seat-availability" element={<SeatAvailability/>}/>
  <Route path="/access-control" element={<AccessControl/>}/>
  <Route path="/notifications" element={<Notifications/>}/>
  <Route path="/settings" element={<Settings/>}/>


        {/* AI */}
        <Route path="/therapysum" element={<TherapySummary />} />
        <Route path="/insights" element={<AIInsights />} />
        <Route path="/feedback-doc" element={<PatientFeedback />} />

        {/* Patient */}
        <Route path="/patient-dashboard" element={<PatientDashBoard />} />
        <Route path="/patient-appointments" element={<Appointments />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/profile-pap" element={<Profile />} />
        <Route path="/patient-settings" element={<Settings />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/seat-availability" element={<SeatAvailability />} />
        <Route path="/insurance" element={<Insurance />} />
        
      </Routes>
      </ThemeProvider>

    
  );
}
