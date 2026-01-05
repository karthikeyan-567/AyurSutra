import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

function PatientCard({ patient }) {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate(`/patients/${patient.id}`);  // dynamic routing
  };

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-4 hover:shadow-md transition">

      {/* Doctor Attended Tag */}
      <div className="flex justify-end mb-2">
        <span className="bg-green-700 text-white text-[10px] font-medium px-2 py-1 rounded-lg">
          Doctor Attended
        </span>
      </div>

      {/* Patient Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
          <User size={22}/>
        </div>
        <div>
          <h3 className="text-base font-semibold text-green-700">{patient.name}</h3>
          <p className="text-xs text-gray-500">Age: {patient.age} • {patient.gender}</p>
        </div>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-600 space-y-1">
        <p><span className="font-medium text-green-700">Therapy:</span> {patient.therapy}</p>
        <p><span className="font-medium text-green-700">Diagnosis:</span> {patient.diagnosis}</p>
      </div>

      {/* Navigation Button */}
      <button
        onClick={openProfile}  // triggers routing
        className="mt-3 w-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 rounded-xl text-xs font-medium transition"
      >
        View Profile
      </button>

    </div>
  );
}

export default PatientCard;
