import { Menu, User, ClipboardList, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b shadow-sm z-50 flex items-center justify-between px-6">

      {/* LEFT: Brand */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-green-700 tracking-tight">
          AyurSutra
        </h1>
      </div>

      {/* CENTER */}
      <div className="w-[45%] text-center">
        <marquee scrollamount="4" className="text-sm font-medium text-green-700">
          🌿 Live OP Consultation • Panchakarma Therapy Tracking • Nadi Pulse Diagnosis
        </marquee>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <Link to="/doc-task" className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-700">
          <ClipboardList size={16} className="text-green-700" />
          Doctor Tasks
        </Link>

        <Link to="/therapysum" className="flex items-center gap-1 text-sm text-gray-600">
          <ClipboardList size={16} className="text-green-700" />
          Therapy Summary
        </Link>

        <Link to="/insights" className="flex items-center gap-1 text-sm text-gray-600">
          <Sparkles size={16} className="text-green-700" />
          AI Insights
        </Link>

        <Link to="/feedback-doc" className="flex items-center gap-1 text-sm text-gray-600">
          <ClipboardList size={16} className="text-green-700" />
          Patient Feedback
        </Link>

        <Link to="/doc-profile" className="flex items-center gap-2 text-green-700">
          <User size={20} />
          <span className="text-sm font-medium text-gray-700">Doctor</span>
        </Link>

      </div>
    </nav>
  );
}
