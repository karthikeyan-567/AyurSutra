import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import PageTransition from "../components/PageTransition";
import DashboardContent from "../components/DashboardContent";
import TabletAlertWidget from "../components/TabletAlertWidget";



export default function DashboardPage() {
  return (
  <PageTransition>
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Navbar />

    
        {/* Your Dashboard content goes here */}
        <DashboardContent></DashboardContent>
      
    </div>
    </PageTransition>
    
  );
}
