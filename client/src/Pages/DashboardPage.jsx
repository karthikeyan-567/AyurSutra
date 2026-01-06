import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
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
