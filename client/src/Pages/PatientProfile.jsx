import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { User } from "lucide-react";

export default function PatientProfile() {
  const { id } = useParams();

  // You will replace this later with API call, for now dummy lookup:
  const patientData = {
    1: { name: "Arun Kumar", age: 34, gender: "Male", therapy: "Shirodhara", diagnosis: "Vata imbalance" },
    2: { name: "Meena S", age: 29, gender: "Female", therapy: "Abhyanga Massage", diagnosis: "Pitta imbalance" },
    3: { name: "Kavin Raj", age: 42, gender: "Male", therapy: "Vasti", diagnosis: "Kapha imbalance" },
    4: { name: "Swetha R", age: 31, gender: "Female", therapy: "Panchakarma Detox", diagnosis: "Vata-Pitta imbalance" }
  };

  const p = patientData[id];

  return (
    <div>
      <Sidebar />
      <Navbar />

      <main className="pt-24 pl-72 pr-6 max-w-3xl">
        {!p ? (
          <div className="text-gray-400 text-center mt-20">Patient not found</div>
        ) : (
          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <User size={30}/>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-green-700">{p.name}</h1>
                <p className="text-sm text-gray-500">Patient ID: {id}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p><strong className="text-green-700">Age:</strong> {p.age}</p>
              <p><strong className="text-green-700">Gender:</strong> {p.gender}</p>
              <p><strong className="text-green-700">Therapy:</strong> {p.therapy}</p>
              <p><strong className="text-green-700">Diagnosis:</strong> {p.diagnosis}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
