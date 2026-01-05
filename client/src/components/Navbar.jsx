import { Menu, User, ClipboardList, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b shadow-sm z-50 flex items-center justify-between px-6">

      {/* LEFT: Brand + Menu */}
      <div className="flex items-center gap-3">
        {/* <button onClick={onMenuClick} className="text-green-700">
          <Menu size={24} />
        </button> */}
        <h1 className="text-xl font-semibold text-green-700 tracking-tight">
<<<<<<< HEAD
          AyurSutra
=======
          AvartanaCare
>>>>>>> 1884859f5c879475243aaf96b7b2d0d24093ed92
        </h1>
      </div>

      {/* CENTER: Professional Ayurveda Marquee */}
      <div className="w-[45%] text-center">
        <marquee
          scrollamount="4"
          className="text-sm font-medium text-green-700 tracking-wide"
        >
          🌿 Live OP Consultation • Panchakarma Therapy Tracking Enabled • Nadi Pulse Diagnosis Available
        </marquee>
      </div>

      {/* RIGHT: New Useful Elements */}
      <div className="flex items-center font-md gap-5">

        {/* Doctor Tasks Quick Access */}
        <Link
          to="/doc-task" 
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-700 transition font-medium"
        >
          <ClipboardList size={16} className="text-green-700" />
          Doctor Tasks
        </Link>

        {/* Therapy Summary */}
       <Link to='/therapysum'> <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
          <ClipboardList size={16} className="pointer text-green-700" />
          Therapy Summary
        </div>
       </Link>

        {/* AI Insights (since you integrate AI later in AAFAMS project) */}
       <Link to='/Insights'> <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
          <Sparkles size={16} className="text-green-700  pointer" />
          AI Insights
        </div></Link>

        {/* Recruiter/Patient Feedback Placeholder */}
        <Link to='/feedback-doc'>
        <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
          <ClipboardList size={16} className="text-green-700 pointer" />
          Patient Feedback
        </div>
        </Link>

        {/* Doctor/User Avatar */}
        <Link to='/doc-profile'><div className="flex items-center gap-2 text-green-700">
          <User size={20} />
          <span className="text-sm font-medium text-gray-700">Doctor</span>
        </div></Link>

      </div>
    </nav>
  );
}
