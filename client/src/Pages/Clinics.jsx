import { useState, useEffect } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Clinics.css";
import { api } from "../services/api";

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
  const [clinics, setClinics] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTherapy, setSelectedTherapy] = useState("All");

  const [selectedClinic, setSelectedClinic] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchClinics();
  }, [search, selectedTherapy]);

  const fetchClinics = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.append('clinicName', search);
      // Backend doesn't support therapy filter in queryClinics yet, but we'll add it if needed
      const data = await api.get(`/clinics?${query.toString()}`);
      setClinics(data.clinics);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!selectedClinic || !appointmentDate || !appointmentTime) return;
    setLoading(true);
    try {
      await api.post('/appointments/book', {
        clinic: selectedClinic._id,
        appointmentDate,
        appointmentTime,
      });
      setSelectedClinic(null);
      setBookingConfirmed(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* 🔹 FILTER LOGIC (Keep local filter for now as well if API is limited) */
  const visibleClinics = clinics; 

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
                Available Clinics
              </h3>
            </div>

            {loading ? (
               <p className="no-data">Loading clinics...</p>
            ) : visibleClinics.length === 0 ? (
              <p className="no-data">No therapy centers found</p>
            ) : (
              visibleClinics.map((clinic, index) => (
                <div key={index} className="clinic-card">
                  <div>
                    <h4>{clinic.clinicName}</h4>
                    <p>{clinic.address}</p>
                    <p className="timing">
                      ⏰ {clinic.openingTime} – {clinic.closingTime}
                    </p>
                    <p className="doctor">Doctor: {clinic.doctor?.name}</p>
                  </div>

                  <button
                    className="btn-outline"
                    onClick={() => {
                      setSelectedClinic(clinic);
                      setAppointmentDate("");
                      setAppointmentTime("");
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

            <p className="modal-clinic">{selectedClinic.clinicName}</p>
            <p className="modal-time">
              ⏰ {selectedClinic.openingTime} – {selectedClinic.closingTime}
            </p>

            <label className="text-xs text-gray-500 mb-1 block">Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="mb-3"
            />

            <label className="text-xs text-gray-500 mb-1 block">Time (HH:MM)</label>
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="mb-3"
            />

            <div className="modal-actions">
              <button
                className="btn-outline"
                onClick={() => setSelectedClinic(null)}
              >
                Cancel
              </button>
              <button
                className="btn-primary"
                disabled={!appointmentDate || !appointmentTime || loading}
                onClick={handleBooking}
              >
                {loading ? "Booking..." : "Confirm Booking"}
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
