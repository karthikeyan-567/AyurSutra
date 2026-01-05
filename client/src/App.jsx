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
