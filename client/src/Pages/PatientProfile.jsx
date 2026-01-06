import { useState, useEffect } from "react";
import DoctorSidebar from "../components/Sidebar";
import DoctorNavbar from "../components/Navbar";
import { HeartPulse, Activity, FileText, AlertTriangle, Calendar, Download } from "lucide-react";

export default function PatientProfile() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(1);
  const [note, setNote] = useState("");

  useEffect(() => {
    setPatients([
      {
        id: 1,
        name: "Arun Kumar",
        age: 34,
        gender: "Male",
        height: 170,
        weight: 82,
        bloodGroup: "B+",
        therapy: "Shirodhara",
        diagnosis: "Vata imbalance",
        vitals: { bp: "110/70", heartRate: 76, sleep: "6 hrs", hydration: "Low", steps: 4300 },
        dosha: { vata: "High", pitta: "Normal", kapha: "Low" },
        medicalHistory: [
          "Chronic acidity since 2024",
          "Irregular sleep cycle",
          "Lower back stiffness frequently",
          "Completed 6-week herbal therapy in 2025"
        ],
        scanReports: [
          { title: "Full Body Dosha Scan", file: "dosha_report.pdf" },
          { title: "Blood Panel Report", file: "blood_panel.pdf" }
        ],
        riskFlags: ["Acidity trend", "Post-workout dehydration"]
      },
      {
        id: 2,
        name: "Meena S",
        age: 29,
        gender: "Female",
        height: 160,
        weight: 67,
        bloodGroup: "A+",
        therapy: "Abhyanga Massage",
        diagnosis: "Pitta imbalance",
        vitals: { bp: "120/80", heartRate: 82, sleep: "7 hrs", hydration: "Normal", steps: 6500 },
        dosha: { vata: "Normal", pitta: "High", kapha: "Normal" },
        medicalHistory: [
          "Acid reflux often",
          "Sensitive to heat and spicy food",
          "Stress-induced migraines",
          "Completed 4-week meditation therapy"
        ],
        scanReports: [
          { title: "Skin Allergy Test", file: "allergy_test.pdf" }
        ],
        riskFlags: ["Heat sensitivity", "Acid reflux"]
      },
      {
        id: 3,
        name: "Kavin Raj",
        age: 42,
        gender: "Male",
        height: 180,
        weight: 90,
        bloodGroup: "O+",
        therapy: "Vasti",
        diagnosis: "Kapha imbalance",
        vitals: { bp: "130/85", heartRate: 70, sleep: "5.5 hrs", hydration: "Low", steps: 3800 },
        dosha: { vata: "Low", pitta: "Normal", kapha: "High" },
        medicalHistory: [
          "Heaviness after meals",
          "Sinus issues for 2 years",
          "Slow metabolism",
          "High cholesterol in 2025"
        ],
        scanReports: [
          { title: "Cholesterol Report", file: "cholesterol_report.pdf" },
          { title: "Dosha Test", file: "kavin_dosha.pdf" }
        ],
        riskFlags: ["Slow metabolism", "Cholesterol"]
      },
      {
        id: 4,
        name: "Swetha R",
        age: 31,
        gender: "Female",
        height: 165,
        weight: 72,
        bloodGroup: "AB+",
        therapy: "Panchakarma Detox",
        diagnosis: "Vata-Pitta imbalance",
        vitals: { bp: "115/75", heartRate: 88, sleep: "6.5 hrs", hydration: "Low", steps: 5000 },
        dosha: { vata: "High", pitta: "High", kapha: "Low" },
        medicalHistory: [
          "Stress and anxiety since 2023",
          "Insomnia occasionally",
          "Skin breakouts often",
          "Completed 8-week steam therapy"
        ],
        scanReports: [
          { title: "MRI Brain Scan", file: "brain_mri.pdf" },
          { title: "Detox Report", file: "detox_report.pdf" }
        ],
        riskFlags: ["Insomnia", "Stress markers high"]
      }
    ]);
  }, []);

  const patient = patients.find(p => p.id === selected);
  if (!patient) return null;

  const bmi = (patient.weight / ((patient.height/100)**2)).toFixed(1);

  return (
    <div className="min-h-screen bg-green-50">
      <DoctorSidebar />
      <DoctorNavbar doctorName="Karthikeyan J" />

      <main className="ml-64 p-6 pt-20 space-y-6">

        {/* Patient Selector Tabs */}
        <div className="flex gap-3 mb-4">
          {patients.map(p => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                selected === p.id ? "bg-green-200 text-green-800" : "bg-white hover:bg-green-100 border border-green-300"
              }`}
            >
              {p.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Header Card */}
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm">
          <h1 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <Activity size={22}/> {patient.name}
          </h1>
          <p className="text-sm text-gray-500">
            Patient ID: {patient.id} | Blood Group: {patient.bloodGroup} | BMI: {bmi} | BMI: {bmi} | Height: {patient.height}cm | Weight: {patient.weight}kg | **BMI: {bmi}**
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Vitals */}
          <div className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm">
            <h2 className="text-green-700 font-semibold flex items-center gap-2 mb-2">
              <HeartPulse size={18}/> Vitals
            </h2>
            <p className="text-sm"><b>BP:</b> {patient.vitals.bp}</p>
            <p className="text-sm"><b>Heart Rate:</b> {patient.vitals.heartRate} bpm</p>
            <p className="text-sm"><b>Sleep:</b> {patient.vitals.sleep}</p>
            <p className="text-sm"><b>Steps:</b> {patient.vitals.steps}</p>
            <p className="text-sm"><b>Hydration:</b> {patient.vitals.hydration}</p>
          </div>

          {/* Dosha */}
          <div className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm">
            <h2 className="text-green-700 font-semibold flex items-center gap-2 mb-2">
              <Activity size={18}/> Dosha Levels
            </h2>
            <p className="text-sm"><b>Vata:</b> {patient.dosha.vata}</p>
            <p className="text-sm"><b>Pitta:</b> {patient.dosha.pitta}</p>
            <p className="text-sm"><b>Kapha:</b> {patient.dosha.kapha}</p>
          </div>

          {/* Risks */}
          <div className="bg-white p-4 rounded-2xl border border-green-200 shadow-sm">
            <h2 className="text-red-600 font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle size={18}/> Risk Flags
            </h2>
            <ul className="text-xs text-gray-600 space-y-1">
              {patient.riskFlags.map(f => <li key={f}>⚠ {f}</li>)}
            </ul>
          </div>
        </div>

        {/* Medical History */}
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-3">Medical History</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {patient.medicalHistory.map(h => <li key={h}>• {h}</li>)}
          </ul>
        </div>

        {/* Scan Reports */}
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-1">
            <FileText size={18}/> Scan / Reports
          </h2>
          {patient.scanReports.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {patient.scanReports.map(r => (
                <div key={r.file} className="text-xs border border-green-300 px-3 py-2 rounded-xl bg-green-50 text-green-700 flex items-center gap-1">
                  <Download size={12}/> {r.title.replace(".pdf","")}
                </div>
              ))}
              <a
  href="/reports/dosha_report.pdf"
  download="Full_Body_Dosha_Scan.pdf"
  className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-lg border border-green-300 hover:bg-green-200 transition"
>
  <Download size={12}/> Full Body Dosha Scan
</a>

<a
  href="/reports/blood_panel.pdf"
  download="Blood_Panel_Report.pdf"
  className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-lg border border-green-300 hover:bg-green-200 transition"
>
  <Download size={12}/> Blood Panel Report
</a>
            </div>
          ) : (
            <p className="text-xs text-gray-400">No scan reports available</p>
          )}
        </div>

        {/* Doctor Notes */}
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-3">Clinical Notes</h2>
          <textarea
            placeholder="Add clinical observations..."
            className="w-full p-3 rounded-xl border border-green-200 focus:outline-green-400 text-sm"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          <button
            onClick={() => alert("Note saved!")}
            className="mt-3 bg-green-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-green-700 transition"
          >
            Save Note
          </button>
        </div>

      </main>
    </div>
  );
}
