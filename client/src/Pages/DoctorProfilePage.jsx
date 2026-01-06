import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { User, Mail, Phone, MapPin, Award, Stethoscope, Leaf } from "lucide-react";
import { useState } from "react";

export default function DoctorProfilePage() {
  const [edit, setEdit] = useState(false);

  const doctor = {
    name: "Dr. Karthik",
    qualification: "BAMS, MD (Ayurveda)",
    experience: "8+ years",
    hospital: "AyurSutra Ayurvedic Multispeciality Hospital",
    phone: "+91 98765 43210",
    email: "doctor@ayursutra",
    location: "Chennai, Tamil Nadu",
    speciality: "Panchakarma • Nadi Pariksha • Dosha Analysis • Ayur Neuro Therapy",
    therapies: ["Shirodhara", "Abhyanga", "Vasti", "Nasya", "Pizhichil", "Panchakarma Detox"],
    awards: ["Best Ayurvedic Practitioner 2024", "Neuro Therapy Excellence Award"],
    about:
      "Dedicated Ayurvedic physician focused on holistic healing, dosha balancing, and root-cause treatment. Expert in Panchakarma purification and Nadi pulse diagnosis.",
    photo: "/doctor-avatar.png",
  };

  return (
   
      <div className="bg-gray-50 min-h-screen">
        <Sidebar />
        <Navbar />

        <main className="pt-20 pl-72 pr-6 max-w-5xl space-y-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <img src={doctor.photo} alt="doctor" className="w-20 h-20 rounded-full border-2 border-green-700 shadow-sm" />
            <div>
              <h1 className="text-2xl font-semibold text-green-700">{doctor.name}</h1>
              <p className="text-sm text-gray-600">{doctor.qualification} • {doctor.experience}</p>
              <div className="flex items-center gap-1 text-xs text-green-700 mt-1">
                <Leaf size={14}/> Ayurvedic Practitioner
              </div>
            </div>
          </div>

          {/* Card: Doctor Info */}
          <div className="bg-white border rounded-2xl shadow-sm p-5 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left Info */}
            <div className="space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2"><Award size={16} className="text-green-700"/> <strong>Speciality:</strong> {doctor.speciality}</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-green-700"/> <strong>Phone:</strong> {doctor.phone}</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-green-700"/> <strong>Email:</strong> {doctor.email}</p>
              <p className="flex items-center gap-2"><MapPin size={16} className="text-green-700"/> <strong>Location:</strong> {doctor.location}</p>
              <p className="flex items-center gap-2"><Stethoscope size={16} className="text-green-700"/> <strong>Hospital:</strong> {doctor.hospital}</p>
            </div>

            {/* Right Edit */}
            <div className="flex justify-end items-start">
              <button onClick={() => setEdit(!edit)} className="text-xs border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-3 py-1 rounded-lg transition">
                {edit ? "Close Edit" : "Edit Profile"}
              </button>
            </div>

          </div>

          {/* About Section */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <h2 className="text-lg font-semibold text-green-700 mb-2 flex items-center gap-2">
              <Leaf size={18}/> About Doctor
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{doctor.about}</p>
          </div>

          {/* Therapies Section */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <h2 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
              <Stethoscope size={18}/> Therapies Provided
            </h2>
            <div className="flex flex-wrap gap-2">
              {doctor.therapies.map((t, i) => (
                <span key={i} className="bg-green-50 border border-green-700/30 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="bg-white border rounded-2xl shadow-sm p-5">
            <h2 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
              <Award size={18}/> Achievements & Awards
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {doctor.awards.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          {/* Edit Form Section */}
          {edit && (
            <div className="bg-white border rounded-2xl shadow-sm p-6 animate-fadeIn">
              <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <User size={20}/> Edit Profile Details
              </h2>

              <div className="grid gap-4">
                <input type="text" defaultValue={doctor.name} className="input"/>
                <input type="text" defaultValue={doctor.qualification} className="input"/>
                <input type="text" defaultValue={doctor.speciality} className="input"/>
                <input type="text" defaultValue={doctor.phone} className="input"/>
                <input type="text" defaultValue={doctor.email} className="input"/>
                <input type="text" defaultValue={doctor.location} className="input"/>

                <button className="btn">Save Changes</button>
              </div>

              {/* Tailwind inline styles */}
              <style>{`
                .input {
                  width: 100%;
                  border: 1px solid #d1d5db;
                  padding: 10px;
                  border-radius: 12px;
                  font-size: 14px;
                  color: #4b5563;
                  outline: none;
                  transition: 0.2s;
                }
                .input:focus {
                  border: 1.5px solid #15803d;
                }
                .btn {
                  background: #15803d;
                  color: white;
                  padding: 10px;
                  border-radius: 12px;
                  font-size: 14px;
                  font-weight: 600;
                  transition: 0.2s;
                  width: 100%;
                }
                .btn:hover {
                  background: #166534;
                }
              `}</style>
            </div>
          )}

        </main>
      </div>
 
  );
}
