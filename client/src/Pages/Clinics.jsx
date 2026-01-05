import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Clinics.css";

const clinicsData = [
  {
    name: "AyurSutra Wellness Center",
    location: "2 km away",
    open: "9:00 AM",
    close: "7:00 PM",
    therapies: ["Abhyanga", "Shirodhara", "Panchakarma"],
    therapists: ["Dr. Rajesh Kumar", "Dr. Meera Patel"],
    slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    name: "Green Leaf Ayurveda Clinic",
    location: "4 km away",
    open: "10:00 AM",
    close: "6:00 PM",
    therapies: ["Udvartana", "Nasya"],
    therapists: ["Dr. Anitha", "Dr. Prakash"],
    slots: ["10:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    name: "Sanjeevani Ayurveda Hospital",
    location: "6 km away",
    open: "8:00 AM",
    close: "8:00 PM",
    therapies: ["Pizhichil", "Panchakarma"],
    therapists: ["Dr. Suresh"],
    slots: ["8:00 AM", "12:00 PM", "5:00 PM"]
  }
];

const therapyOptions = [
  "All",
  "Abhyanga",
  "Shirodhara",
  "Panchakarma",
  "Udvartana",
  "Nasya",
  "Pizhichil"
];

export default function Clinics() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTherapy, setSelectedTherapy] = useState("All");

  const [selectedClinic, setSelectedClinic] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [therapy, setTherapy] = useState("");
  const [therapist, setTherapist] = useState("");
  const [slot, setSlot] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  /* 🔹 FILTER LOGIC */
  const isFiltering = search !== "" || selectedTherapy !== "All";

  const filteredClinics = clinicsData.filter((clinic) => {
    const matchesSearch = clinic.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTherapy =
      selectedTherapy === "All" ||
      clinic.therapies.includes(selectedTherapy);

    return matchesSearch && matchesTherapy;
  });

  const visibleClinics = isFiltering
    ? filteredClinics
    : showAll
    ? clinicsData
    : clinicsData.slice(0, 2);

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="clinics-content">
          <h2 className="page-title">Clinics</h2>
          <p className="page-sub">
            Search and filter therapy centers near you
          </p>

          {/* SEARCH & FILTER */}
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search therapy center..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={selectedTherapy}
              onChange={(e) => setSelectedTherapy(e.target.value)}
            >
              {therapyOptions.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* CLINICS LIST */}
          <div className="card">
            <div className="history-header">
              <h3 className="card-title">
                {isFiltering ? "Therapy Centers" : "Nearby Clinics"}
              </h3>

              {!isFiltering && (
                <button
                  className="see-all"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "See Less" : "See All"}
                </button>
              )}
            </div>

            {visibleClinics.length === 0 ? (
              <p className="no-data">No therapy centers found</p>
            ) : (
              visibleClinics.map((clinic, index) => (
                <div key={index} className="clinic-card">
                  <div>
                    <h4>{clinic.name}</h4>
                    <p>{clinic.location}</p>
                    <p className="timing">
                      ⏰ {clinic.open} – {clinic.close}
                    </p>

                    <div className="therapy-tags">
                      {clinic.therapies.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn-outline"
                    onClick={() => {
                      setSelectedClinic(clinic);
                      setPatientName("");
                      setTherapy("");
                      setTherapist("");
                      setSlot("");
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {selectedClinic && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Appointment</h3>

            <p className="modal-clinic">{selectedClinic.name}</p>
            <p className="modal-time">
              ⏰ {selectedClinic.open} – {selectedClinic.close}
            </p>

            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />

            <select value={therapy} onChange={(e) => setTherapy(e.target.value)}>
              <option value="">Select Therapy</option>
              {selectedClinic.therapies.map((t, i) => (
                <option key={i}>{t}</option>
              ))}
            </select>

            <select
              value={therapist}
              onChange={(e) => setTherapist(e.target.value)}
            >
              <option value="">Select Therapist</option>
              {selectedClinic.therapists.map((t, i) => (
                <option key={i}>{t}</option>
              ))}
            </select>

            <select value={slot} onChange={(e) => setSlot(e.target.value)}>
              <option value="">Select Time Slot</option>
              {selectedClinic.slots.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>

            <div className="modal-actions">
              <button
                className="btn-outline"
                onClick={() => setSelectedClinic(null)}
              >
                Cancel
              </button>
              <button
                className="btn-primary"
                disabled={!patientName || !therapy || !therapist || !slot}
                onClick={() => {
                  setSelectedClinic(null);
                  setBookingConfirmed(true);
                }}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {bookingConfirmed && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">✅</div>
            <h3>Booking Confirmed</h3>
            <p>Your appointment has been successfully booked.</p>

            <button
              className="btn-primary"
              onClick={() => setBookingConfirmed(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
