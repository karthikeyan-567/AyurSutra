import { useState } from "react";
import SideBar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import "../styles/SeatAvailability.css";

const initialBeds = Array.from({ length: 20 }, (_, i) => {
  if (i < 2)
    return {
      id: i + 1,
      status: "emergency",
      therapy: "Emergency",
      gender: "Any"
    };

  return {
    id: i + 1,
    status: i % 5 === 0 ? "occupied" : "available",
    therapy: ["Abhyanga", "Shirodhara", "Panchakarma"][i % 3],
    gender: i % 2 === 0 ? "Male" : "Female",
    availableAt: "4:30 PM"
  };
});

export default function DoctorSeat() {
  const [beds, setBeds] = useState(initialBeds);
  const [selectedBed, setSelectedBed] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [therapyFilter, setTherapyFilter] = useState("All");
  const [gender, setGender] = useState("Male");
  const [bookings, setBookings] = useState([]);

  const filteredBeds =
    therapyFilter === "All"
      ? beds
      : beds.filter((b) => b.therapy === therapyFilter);

  const counts = {
    total: beds.length,
    available: beds.filter((b) => b.status === "available").length,
    occupied: beds.filter((b) => b.status === "occupied").length,
    reserved: beds.filter((b) => b.status === "reserved").length
  };

  const confirmBooking = () => {
    setBeds(
      beds.map((b) =>
        b.id === selectedBed.id ? { ...b, status: "reserved" } : b
      )
    );

    setBookings([
      ...bookings,
      {
        bed: selectedBed.id,
        therapy: selectedBed.therapy,
        date
      }
    ]);

    setShowModal(false);
  };

  const cancelBooking = (bedId) => {
    setBeds(
      beds.map((b) =>
        b.id === bedId ? { ...b, status: "available" } : b
      )
    );
  };

  return (
    <div className="patient-dashboard w-[70%] relative left-[300px]">
      <SideBar />
      <div className="patient-main">
        <NavBar />

        <div className="seat-wrapper">
          <h2 className="page-title">Bed Availability</h2>
          <p className="page-sub">🟢 Live updates enabled</p>

          {/* FILTERS */}
          <div className="filter-row">
            <select onChange={(e) => setTherapyFilter(e.target.value)}>
              <option>All</option>
              <option>Abhyanga</option>
              <option>Shirodhara</option>
              <option>Panchakarma</option>
            </select>

            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>

          {/* SUMMARY */}
          <div className="seat-summary">
            <Stat label="Total Beds" value={counts.total} />
            <Stat label="Available" value={counts.available} green />
            <Stat label="Occupied" value={counts.occupied} red />
            <Stat label="Reserved" value={counts.reserved} orange />
          </div>

          {/* BED GRID */}
          <div className="bed-grid">
            {filteredBeds.map((bed) => (
              <div
                key={bed.id}
                className={`bed ${bed.status}`}
                onClick={() => {
                  if (bed.status === "available") {
                    setSelectedBed(bed);
                    setShowModal(true);
                  }
                }}
              >
                Bed {bed.id}
                {bed.status === "occupied" && (
                  <small>Free at {bed.availableAt}</small>
                )}
                {bed.status === "emergency" && (
                  <small>🚑 Reserved</small>
                )}
              </div>
            ))}
          </div>

          {/* BOOKING HISTORY */}
          <div className="seat-card">
            <h3>Your Bookings</h3>
            {bookings.length === 0 ? (
              <p>No bookings yet</p>
            ) : (
              bookings.map((b, i) => (
                <div key={i} className="booking-row">
                  Bed {b.bed} · {b.therapy} · {b.date}
                  <button onClick={() => cancelBooking(b.bed)}>
                    Cancel
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* BOOK MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Bed {selectedBed.id}</h3>

            <p>Therapy: {selectedBed.therapy}</p>

            <select onChange={(e) => setGender(e.target.value)}>
              <option>Male</option>
              <option>Female</option>
            </select>

            <button className="btn-primary" onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* SMALL COMPONENT */
function Stat({ label, value, green, red, orange }) {
  return (
    <div className={`stat ${green ? "green" : red ? "red" : orange ? "orange" : ""}`}>
      <p>{label}</p>
      <h3>{value}</h3>
    </div>
  );
}
