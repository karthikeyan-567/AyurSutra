import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";



export default function DashboardPage() {
  return (
  
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Navbar />

    
        {/* Your Dashboard content goes here */}
        <DashboardContent></DashboardContent>
      
    </div>

    
  );
}
